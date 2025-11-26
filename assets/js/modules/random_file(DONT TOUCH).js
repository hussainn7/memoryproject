import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import Form from "@uppy/form";
import FileInput from '@uppy/file-input';
import XHR from '@uppy/xhr-upload';
import Russian from '@uppy/locales/lib/ru_RU';
import FormValidation from '../../extra-libs/formvalidation-es6/core/Core';
import ImageEditor from '@uppy/image-editor';

// ✅ CRITICAL: Log at module level (before function definition)
console.log('🔥 person-form.js FILE LOADED AT MODULE LEVEL!', new Date().toISOString());

const personForm = function ($, Routing) {
    // ✅ CRITICAL: Log immediately when function is called
    console.log('🚀 person-form.js FUNCTION CALLED!', {
        hasJQuery: typeof $ !== 'undefined',
        hasRouting: typeof Routing !== 'undefined',
        timestamp: new Date().toISOString(),
    });
    
    $(document).ready(function () {
        console.log('📄 Document ready in person-form.js');
        
        // ✅ DEBUG: Check window variables first
        console.log('🔍 DEBUG: Checking window variables:', {
            currentArchiveCount: window.currentArchiveCount,
            memoryIsExtended: window.memoryIsExtended,
            photoExtensionPrice: window.photoExtensionPrice,
            hasUUID: !!$('.js--uuid').val(),
            photoArhiveExists: $('#photoArhive').length > 0,
            targetEl2Exists: $('#js--upload-person-photo-arhive').length > 0,
        });
        
        // ✅ Check if we're on a form page OR public page with upload capability
        const isFormPage = $('.js--person-form, .js--person-form-edit').length > 0;
        const isPublicPage = $('#photoArhive').length > 0;
        
        console.log('🔍 Page type check:', {
            isFormPage,
            isPublicPage,
            photoArhiveExists: $('#photoArhive').length > 0,
            currentArchiveCountDefined: window.currentArchiveCount !== undefined,
        });
        
        if (!isFormPage && !isPublicPage) {
            console.log('⚠️ Not on person form or public page, skipping Uppy initialization');
            return;
        }
        
        console.log('✅ Person form module loading:', { isFormPage, isPublicPage });

        // Initialize theme selector if it exists
        if ($('.js--select-memory-thema').length) {
            $('.js--select-memory-thema').trigger('change');
        }

        // Initialize map on page load if map exists
        if ($('#mapPerson').length) {
            mapInit();
        }

        const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
            const byteCharacters = atob(b64Data);
            const byteArrays = [];

            for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                const slice = byteCharacters.slice(offset, offset + sliceSize);

                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }

            const blob = new Blob(byteArrays, {type: contentType});
            return blob;
        };


        const formClass = '.js--person-form';
        const form = $('.validation-wizard').show();
        const typeTodo = $(formClass).data('type');
        const formType = $(formClass).data('type-form');


        $(document).on('click', '.js--add-epitaph', function (e) {

            let el = document.createElement('button');
            el.className = 'btn btn-default mt-3 js--delete-epitaph';
            el.innerHTML = 'Удалить';

            addFormToCollection(e, el);

            $(this).remove();

        });

        $(document).on('click', '.js--add-wordsMemory', function (e) {

            let el = document.createElement('button');
            el.className = 'btn btn-default mt-3 js--delete-item';
            el.innerHTML = 'Удалить';

            addFormToCollection(e, el);
        });

        $(document).on('click', '.js--add-linksMemory', function (e) {

            let el = document.createElement('button');
            el.className = 'btn btn-default mt-3 js--delete-item';
            el.innerHTML = 'Удалить';

            addFormToCollection(e, el);
        });

        $(document).on('click', '.js--add-burialPlace', function (e) {

            let el = document.createElement('button');
            el.className = 'btn btn-default mt-3 js--delete-burialPlace';
            el.innerHTML = 'Удалить';

            addFormToCollection(e, el);
            $(this).remove();

            const autoAddInProgress = window.__personAutoAddInProgress === true;

            window.personMapInitialized = false;

            if (autoAddInProgress) {
                window.__personAutoAddInProgress = false;
            } else {
                // Map is now always visible, just reinitialize it
                mapInit();
            }
        });


        $(document).on('click', '.js--delete-burialPlace', function (e) {

            let parent = $(this).parent();

            // Map stays visible, just reinitialize it after deletion
            let el = '<button type="button" class="btn btn-default mt-3 js--add-burialPlace" data-collection-holder-class="burialPlace">Отметить на карте место захоронения</button>';

            // Clear coordinates for the specific burial place being deleted
            parent.find('input[name*="[lat]"]').val('');
            parent.find('input[name*="[lng]"]').val('');

            parent.parent().next().html(el);
            parent.remove();

            // Reinitialize map to show remaining burial place or defaults
            window.personMapInitialized = false;
            mapInit();

        });

        $(document).on('click', '.js--delete-epitaph', function (e) {

            let parent = $(this).parent();

            let el = '<button type="button" class="btn btn-default m-3 js--add-epitaph" data-collection-holder-class="epitaph">Добавить эпитаф</button>';

            parent.parent().next().html(el)

            parent.remove();

        });

        $(document).on('click', '.js--delete-item', function (e) {
            $(this).parent().remove();
        });

        function addFormToCollection(e, el) {
            const collectionHolder = document.querySelector('.' + e.currentTarget.dataset.collectionHolderClass);

            console.log(collectionHolder.dataset.index);

            const item = document.createElement('li');

            item.innerHTML = collectionHolder
                .dataset
                .prototype
                .replace(
                    /__name__/g,
                    collectionHolder.dataset.index
                );

            item.append(el);

            collectionHolder.appendChild(item);

            collectionHolder.dataset.index++;

        };


        function mapInit() {
            // Check if map is already initialized to prevent duplicates
            if (window.personMapInitialized) {
                console.log('Map already initialized, skipping...');
                return;
            }

            if (typeof addBurialPlaceIfNeeded === 'function') {
                addBurialPlaceIfNeeded();
            }

            setTimeout(function () {
                // Find the last burial place coordinates, or use defaults
                let lng = '37.554263';
                let lat = '55.724596';

                // Look for existing burial place coordinates (find the last one)
                const lastLatField = $('.burialPlace li:last-child input[name*="[lat]"]');
                const lastLngField = $('.burialPlace li:last-child input[name*="[lng]"]');

                if (lastLatField.length && lastLatField.val()) {
                    lat = lastLatField.val();
                }
                if (lastLngField.length && lastLngField.val()) {
                    lng = lastLngField.val();
                }

                console.log('Initializing map with coordinates:', lat, lng);

                ymaps.ready(function () {
                    try {
                        const map = new ymaps.Map('mapPerson', {
                            center: [lat, lng], // Yandex Maps uses [lat, lng] order
                            zoom: 13,
                            controls: ['zoomControl', 'fullscreenControl', 'searchControl']
                        });

                        const placemark = new ymaps.Placemark([lat, lng], {
                            hintContent: 'Место захоронения',
                            balloonContent: 'Перетащите маркер для точного позиционирования'
                        }, {
                            preset: 'islands#redIcon',
                            draggable: true
                        });

                        map.geoObjects.add(placemark);

                        // Store map and placemark globally for search and location functions
                        window.burialPlaceMap = map;
                        window.burialPlacePlacemark = placemark;

                        // Handle placemark drag
                        placemark.events.add('dragend', function () {
                            const coordinates = placemark.geometry.getCoordinates();
                            window.updateBurialPlaceCoordinates(coordinates[0], coordinates[1]);
                        });

                        // Handle map click to move placemark
                        map.events.add('click', function (e) {
                            const coords = e.get('coords');
                            placemark.geometry.setCoordinates(coords);
                            window.updateBurialPlaceCoordinates(coords[0], coords[1]);
                        });

                        // Mark as initialized
                        window.personMapInitialized = true;
                        console.log('Map initialized successfully');

                        // Initialize search and location functionality
                        initBurialPlaceSearch();

                    } catch (error) {
                        console.error('Yandex Maps initialization failed:', error);
                        // Show error message to user
                        $('#mapPerson').html('<div class="alert alert-warning p-3"><i class="fas fa-exclamation-triangle me-2"></i>Карта недоступна. Проверьте API-ключ Yandex Maps.</div>');
                    }
                }).catch(function (error) {
                    console.error('Yandex Maps API loading failed:', error);
                    // Show error message to user
                    $('#mapPerson').html('<div class="alert alert-warning p-3"><i class="fas fa-exclamation-triangle me-2"></i>Карта недоступна. Проверьте подключение к интернету и API-ключ.</div>');
                });
            }, 1200);
        }


        // Function to automatically add a burial place if none exist
        function addBurialPlaceIfNeeded() {
            const burialPlaces = $('.burialPlace li');
            if (burialPlaces.length === 0) {
                console.log('🔧 Auto-adding burial place...');
                const addButton = $('.js--add-burialPlace').first();

                if (!addButton.length) {
                    console.log('⚠️ Add burial place button not found');
                    return false;
                }

                window.__personAutoAddInProgress = true;
                addButton.trigger('click');
                window.__personAutoAddInProgress = false;
                return true;
            }

            return true;
        }

        window.__personFormAddBurialPlaceIfNeeded = addBurialPlaceIfNeeded;

        // Function to transfer coordinates from temp fields to form fields before submission
        function transferTempCoordinatesToForm() {
            const tempLat = $('#temp_lat').val();
            const tempLng = $('#temp_lng').val();

            if (tempLat && tempLng) {
                console.log('🔄 Transferring temp coordinates to form:', tempLat, tempLng);

                // Try to find burial place form fields
                const latFields = $('.burialPlace input[name*="[lat]"]');
                const lngFields = $('.burialPlace input[name*="[lng]"]');

                if (latFields.length > 0 && lngFields.length > 0) {
                    // Transfer to the last burial place
                    latFields.last().val(tempLat);
                    lngFields.last().val(tempLng);
                    console.log('✅ Coordinates transferred to form fields');

                    // Clear temp fields
                            zoom: 13,
                            controls: ['zoomControl', 'fullscreenControl']
                        });

                        const placemark = new ymaps.Placemark([lat, lng], {}, {
                            preset: 'islands#redIcon'
                        });

                        map.geoObjects.add(placemark);
                    } catch (error) {
                        console.error('Yandex Maps burial place view failed:', error);
                        $('#mapBurialPlace').html('<div class="alert alert-warning p-2 small"><i class="fas fa-exclamation-triangle me-2"></i>Карта недоступна</div>');
                    }
                }).catch(function (error) {
                    console.error('Yandex Maps API loading failed for burial place:', error);
                    $('#mapBurialPlace').html('<div class="alert alert-warning p-2 small"><i class="fas fa-exclamation-triangle me-2"></i>Карта недоступна</div>');
                });
            }, 1200);
        }


        //{{ path('admin_qrcode_view', {id: qrcode.id}) }}


        //default target is person/new
        let targetEl = '#js--upload-person-avatar';
        let targetEl2 = '#js--upload-person-photo-arhive';

        // let endpoint = '/person/code/'+'b9e7aa0b-1c80-4b33-8ae7-a9a56989d71e';
        let uuid = $('.js--uuid').val();

        let endpoint = Routing.generate('person_code', {uuid});

        console.log(endpoint);

        let previewFiles = [];
        let previewFilesPhotoArhive = [];

        let type = $('.js--person-form-edit').data('type');
        console.log(type);
        if (type === 'edit') {
            //targetEl = '#js--edit-files-uppy';
            endpoint = Routing.generate('edit_person_page', {uuid});

            $.ajax({
                type: 'GET',
                url: Routing.generate('person_get_preview_main_photo', {uuid}),
                dataType: "json",
                async: false,
                success: function (data) {
                    previewFiles = data;
                },

                error: function (e) {
                    console.log(e);
                }
            });


            $.ajax({
                type: 'GET',
                url: Routing.generate('person_get_preview_photo_arhive', {uuid}),
                dataType: "json",
                async: false,
                success: function (data) {
                    previewFilesPhotoArhive = data;
                },

                error: function (e) {
                    console.log(e);
                }
            });


        }

        // ✅ DEBUG: Check if elements exist
        console.log('🔍 Uppy initialization check:', {
            targetEl: targetEl,
            targetElExists: $(targetEl).length > 0,
            targetEl2: targetEl2,
            targetEl2Exists: $(targetEl2).length > 0,
            currentArchiveCount: window.currentArchiveCount,
            memoryIsExtended: window.memoryIsExtended,
        });

        // ✅ Initialize avatar uploader (Uppy) only if target element exists
        if ($(targetEl).length) {
            setTimeout(function () {
                window.uppy = new Uppy({
                    locale: Russian,
                    id: 'id_1',
                    allowMultipleUploadBatches: false,
                    restrictions: {
                        maxFileSize: 15728640,//15 mb
                        // Exactly ONE avatar for step 1
                        maxNumberOfFiles: 1,
                        minNumberOfFiles: 1,
                        allowedFileTypes: ["image/*"]
                    },
                    onBeforeFileAdded: function (currentFile, files) {
                        currentFile.meta.name = '_' + currentFile.name.toLowerCase();
                        return currentFile;
                    },

                    onBeforeUpload: (files) => {
                        const updatedFiles = {};
                        Object.keys(files).forEach((fileID) => {
                            updatedFiles[fileID] = {
                                ...files[fileID],
                                name: `Avatar_@_6226922`
                            };
                        });
                        return updatedFiles;
                    },
                    meta: {
                        'isUploadFiles': true,
                        'uploadType': 'avatar'
                    },
                })
                    .use(Dashboard, {
                        inline: true,
                        width: "100%",
                        height: 650,
                        hideUploadButton: true,
                        target: targetEl,
                        trigger: targetEl,
                        showProgressDetails: true,
                        proudlyDisplayPoweredByUppy: false,

                    })
                    .use(XHR, {
                        endpoint: endpoint,
                        bundle: true,
                        fieldName: 'files',
                        getResponseData(responseText, response) {
                            console.log('📡 XHR response:', response.status, responseText);

                            const safeParse = () => {
                                try {
                                    return responseText ? JSON.parse(responseText) : {};
                                } catch (e) {
                                    console.warn('⚠️ Unable to parse upload response JSON.', e);
                                    return {};
                                }
                            };

                            const data = safeParse();

                            if (response.status === 200 && data.success !== false) {
                                console.log('✅ Main upload completed');
                                try {
                                    if (window.uppy2) {
                                        const state2 = window.uppy2.getState();
                                        const hasArchive = state2 && state2.files && !jQuery.isEmptyObject(state2.files);
                                        if (hasArchive) {
                                            console.log('📦 Starting archive upload');
                                            window.uppy2.upload();
                                            return { success: true };
                                        }
                                    }
                                } catch (e) {
                                    console.warn('Archive upload trigger failed:', e);
                                }

                                // No archive queued, redirect immediately
                                window.location.href = Routing.generate('person_code', {uuid});
                                return { success: true };
                            }

                            const message = data.message || 'Попробуйте еще раз';
                            console.error('❌ Upload failed with status:', response.status, message);
                            Swal.fire('Ошибка загрузки', message, 'error');

                            return { success: false };
                        }
                    })
                    .use(ImageEditor, {
                        actions: {
                            revert: true,
                            rotate: true,
                            granularRotate: false,
                            flip: false,
                            zoomIn: true,
                            zoomOut: true,
                            cropSquare: false,
                            cropWidescreen: false,
                            cropWidescreenVertical: true,
                        }
                    })
                    .use(Form, {
                        target: '.js--person-form',
                        getMetaFromForm: true,
                        addResultToForm: true,
                        submitOnSuccess: false, // we'll redirect in XHR getResponseData
                        triggerUploadOnSubmit: true // send files + form in one request
                    });

                // Override the default upload success behavior
                window.uppy.on('upload-success', (file, response) => {
                    console.log('📎 File upload successful:', file.name);
                });

                window.uppy.on('upload-error', (file, error, response) => {
                    console.error('❌ File upload failed:', file.name, error);
                });
            }, 100); // End of setTimeout for avatar uploader
        } // End of if ($(targetEl).length) for avatar uploader

        // ✅ CRITICAL: Initialize Uppy2 for archive uploads (works on both form and public pages)
        const targetEl2Archive = '#js--upload-person-photo-arhive';
        console.log('🔍 Checking for Uppy2 target element:', {
            selector: targetEl2Archive,
            exists: $(targetEl2Archive).length > 0,
            element: $(targetEl2Archive)[0],
        });
        
        if (!$(targetEl2Archive).length) {
            console.warn('⚠️ Uppy2 target element not found:', targetEl2Archive);
            console.warn('⚠️ Archive uploader will not be available');
            console.warn('⚠️ Available elements:', {
                photoArhive: $('#photoArhive').length,
                body: $('body').length,
            });
            // Don't return - try to create the element if it's missing on form pages
            if (isFormPage) {
                console.log('🔧 Form page detected - checking if we need to create upload element');
                // The element should exist in the form template, but let's not fail silently
            }
            return;
        }

        // ✅ SERVER-SIDE CHECK: We'll validate via API, so allow more files initially
        // The server will block in onBeforeFileAdded callback
        console.log('🔧 Uppy2 initialization START (server-side validation mode)');
        console.log('🔧 Target element:', targetEl2Archive, 'Exists:', $(targetEl2Archive).length);
        
        // Make sure we initialize Uppy2 even on form pages
        window.uppy2 = new Uppy({
            locale: Russian,
            id: 'id_2', // CRITICAL: Must match original for compatibility
            autoProceed: false,
            allowMultipleUploadBatches: false,
            restrictions: {
                maxFileSize: 15728640, // 15 mb
                maxNumberOfFiles: 100, // High limit - server will validate
                minNumberOfFiles: 0,
                allowedFileTypes: ["image/*"]
            }
        });

        // ✅ VALIDATION: Use file-added event instead of onBeforeFileAdded
        // This is more reliable than trying to prevent files from being added
        window.uppy2.on('file-added', (file) => {
            console.log('🔥 file-added event CALLED:', file.name, file.size);

            const filesInQueue = Object.keys(window.uppy2.getState().files).length;
            const uuid = $('.js--uuid').val() || window.location.pathname.split('/').pop();

            console.log('📎 File added to queue:', {
                file: file.name,
                filesInQueue,
                uuid,
            });

            // For new memory creation (no UUID yet), use client-side check
            if (!uuid || uuid === 'new' || uuid === '') {
                console.log('📝 New memory creation detected - using client-side limit check');
                const currentCount = window.currentArchiveCount || 0;
                const isExtended = window.memoryIsExtended || false;
                const freeLimit = 5;
                const totalWouldBe = currentCount + filesInQueue;

                console.log('🔢 Client-side limit check:', {
                    currentCount,
                    filesInQueue,
                    totalWouldBe,
                    freeLimit,
                    isExtended,
                });

                if (!isExtended && totalWouldBe > freeLimit) {
                    console.warn('🚫 BLOCKING file (client-side):', file.name);

                    // Remove the file from Uppy
                    window.uppy2.removeFile(file.id);

                    if (!window.uppyLimitPopupShown) {
                        window.uppyLimitPopupShown = true;
                        const price = window.photoExtensionPrice || 500;

                        setTimeout(() => {
                            Swal.fire({
                                title: 'Достигнут лимит фотографий',
                                html: `
                                    <div style="text-align: left; padding: 15px;">
                                        <p style="font-size: 16px; margin-bottom: 15px;">
                                            🚫 <strong>Вы достигли бесплатного лимита</strong>
                                        </p>
                                        <div style="background: #f8f9fa; padding: 12px; border-radius: 8px; margin: 15px 0;">
                                            <p style="margin: 8px 0;">📸 Лимит: <strong>${freeLimit}</strong> фотографий</p>
                                            <p style="margin: 8px 0;">✅ Загружено: <strong>${currentCount}</strong> из <strong>${freeLimit}</strong></p>
                                            <p style="margin: 8px 0;">📊 Осталось: <strong>${Math.max(0, freeLimit - currentCount)}</strong></p>
                                        </div>
                                        <p style="font-size: 18px; color: #28a745; font-weight: bold; margin-top: 15px;">
                                            💰 Оплатите ${price} ₽ для неограниченной загрузки
                                        </p>
                                        <p style="color: #666; font-size: 0.9em; margin-top: 10px;">
                                            После оплаты вы сможете загружать любое количество фотографий
                                        </p>
                                    </div>
                                `,
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: `Оплатить ${price} ₽`,
                                cancelButtonText: 'Понятно',
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#6c757d',
                                allowOutsideClick: false,
                            }).then((result) => {
                                window.uppyLimitPopupShown = false;
                                if (result.isConfirmed) {
                                    Swal.fire({
                                        title: 'Информация',
                                        text: 'Оплата будет доступна после создания страницы памяти',
                                        icon: 'info',
                                    });
                                }
                            });
                        }, 100);
                    }

                    return; // File removed, exit
                }

                console.log('✅ ACCEPTING file (client-side):', file.name);
            } else {
                // SERVER-SIDE CHECK: For existing memories
                console.log('🌐 Starting server-side limit check for existing memory...');

                fetch(Routing.generate('person_check_upload_limit', {uuid}), {
                    method: 'GET',
                    headers: {'X-Requested-With': 'XMLHttpRequest'},
                })
                .then(response => {
                    console.log('📡 Server response status:', response.status);
                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('📊 Server limit check response:', data);

                    if (!data || typeof data.currentCount === 'undefined') {
                        console.error('❌ Invalid server response:', data);
                        return; // Allow file if server response is invalid
                    }

                    const totalWouldBe = data.currentCount + filesInQueue;

                    console.log('🔢 Limit calculation:', {
                        currentCount: data.currentCount,
                        filesInQueue,
                        totalWouldBe,
                        freeLimit: data.freeLimit,
                        isExtended: data.isExtended,
                    });

                    // ✅ BLOCK if not extended and would exceed limit
                    if (!data.isExtended && totalWouldBe > data.freeLimit) {
                        console.warn('🚫 BLOCKING file (server-side):', file.name);

                        // Remove the file from Uppy
                        window.uppy2.removeFile(file.id);

                        // Show payment modal (with slight delay to avoid multiple popups)
                        if (!window.uppyLimitPopupShown) {
                            window.uppyLimitPopupShown = true;

                            setTimeout(() => {
                                Swal.fire({
                                    title: 'Достигнут лимит фотографий',
                                    html: `
                                        <div style="text-align: left; padding: 15px;">
                                            <p style="font-size: 16px; margin-bottom: 15px;">
                                                🚫 <strong>Вы достигли бесплатного лимита</strong>
                                            </p>
                                            <div style="background: #f8f9fa; padding: 12px; border-radius: 8px; margin: 15px 0;">
                                                <p style="margin: 8px 0;">📸 Лимит: <strong>${data.freeLimit}</strong> фотографий</p>
                                                <p style="margin: 8px 0;">✅ Загружено: <strong>${data.currentCount}</strong> из <strong>${data.freeLimit}</strong></p>
                                                <p style="margin: 8px 0;">📊 Осталось: <strong>${data.remaining}</strong></p>
                                            </div>
                                            <p style="font-size: 18px; color: #28a745; font-weight: bold; margin-top: 15px;">
                                                💰 Оплатите ${data.price} ₽ для неограниченной загрузки
                                            </p>
                                            <p style="color: #666; font-size: 0.9em; margin-top: 10px;">
                                                После оплаты вы сможете загружать любое количество фотографий
                                            </p>
                                        </div>
                                    `,
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonText: `Оплатить ${data.price} ₽`,
                                    cancelButtonText: 'Понятно',
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#6c757d',
                                    allowOutsideClick: false,
                                }).then((result) => {
                                    window.uppyLimitPopupShown = false; // Reset flag

                                    if (result.isConfirmed && uuid) {
                                        // Call payment endpoint
                                        fetch(Routing.generate('person_extend_photos', {uuid}), {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'X-Requested-With': 'XMLHttpRequest',
                                            },
                                        })
                                        .then(async (res) => {
                                            const json = await res.json().catch(() => ({ success: false }));
                                            if (res.ok && json.success) {
                                                Swal.fire({
                                                    title: 'Успешно!',
                                                    text: 'Расширенный доступ активирован. Страница будет перезагружена.',
                                                    icon: 'success',
                                                    timer: 2000,
                                                }).then(() => {
                                                    window.location.reload();
                                                });
                                            } else {
                                                Swal.fire({
                                                    title: 'Ошибка',
                                                    text: json.message || 'Не удалось активировать расширенный доступ',
                                                    icon: 'error',
                                                });
                                            }
                                        })
                                        .catch((error) => {
                                            console.error('Payment error:', error);
                                            Swal.fire({
                                                title: 'Ошибка',
                                                text: 'Не удалось выполнить запрос',
                                                icon: 'error',
                                            });
                                        });
                                    }
                                });
                            }, 100);
                        }

                        return; // File removed, exit
                    }

                    // Accept the file
                    console.log('✅ ACCEPTING file (server-side):', file.name);
                })
                .catch(error => {
                    console.error('❌ Server limit check failed:', error);
                    console.warn('⚠️ Allowing file due to check failure - will be validated on upload');
                    // Don't remove file on error - allow it through
                });
            }
        });

        // Now add the plugins
        console.log('🔧 Adding Dashboard plugin to Uppy2...');
        window.uppy2
        .use(Dashboard, {
            id: 'Dashboard',
            inline: true,
            width: "100%",
            height: 650,
            hideUploadButton: false, // Show upload button so users can upload
            target: targetEl2Archive,
            trigger: targetEl2Archive,
            showProgressDetails: true,
            proudlyDisplayPoweredByUppy: false,
            note: '📸 Фотоархив: Бесплатно до 5 фотографий. Серверная валидация лимита.',
            closeModalOnClickOutside: false,
            disablePageScrollWhenModalOpen: false,
            showRemoveButtonAfterComplete: true,
            animateOpenClose: true,
            browserBackButtonClose: false,
            meta: {
                'isUploadFiles': true,
                'uploadType': 'archive'
            },
        })
        .use(XHR, {
            id: 'XHR',
            endpoint: endpoint,
            bundle: true,
            fieldName: 'files',
            allowedMetaFields: ['uploadType', 'isUploadFiles'],
            getResponseData(responseText, response) {
                console.log('📦 Archive upload response:', response.status);
                
                const safeParse = () => {
                    try {
                        return responseText ? JSON.parse(responseText) : {};
                    } catch (e) {
                        return {};
                    }
                };
                
                const data = safeParse();
                
                // Check for limit (backup server-side check)
                if (response.status === 402 || data.limitReached) {
                    console.warn('🚫 Server blocked upload - limit reached');
                    window.uppy2.cancelAll();
                    
                    Swal.fire({
                        title: 'Лимит превышен',
                        text: data.message || 'Достигнут лимит фотографий',
                        icon: 'error',
                    });
                    
                    return { success: false };
                }
                
                if (response.status === 200 && data.success !== false) {
                    console.log('✅ Archive upload successful');
                    return { success: true };
                }
                
                const message = data.message || 'Ошибка загрузки';
                Swal.fire('Ошибка', message, 'error');
                return { success: false };
            }
        });
        
        // Check limit before upload starts
        window.uppy2.on('before-upload', (files) => {
            const fileCount = Object.keys(files).length;
            console.log('🔍 Pre-upload check: attempting to upload', fileCount, 'files');
        });
        
        // Ensure uploadType is sent in request
        window.uppy2.on('upload', (data) => {
            console.log('📤 Archive upload starting with', data.fileIDs?.length || 0, 'files');
        });
        
        console.log('✅ Uppy2 fully initialized and ready');
        console.log('🎯 Uppy2 instance:', window.uppy2);
        console.log('🎯 Uppy2 ID:', window.uppy2?.id);
        
        // Check plugins after a delay to ensure they're attached
        setTimeout(() => {
            // Check plugins using the correct method for this Uppy version
            let plugins = [];
            let hasDashboard = false;
            let hasXHR = false;

            try {
                // Try newer Uppy API first
                if (typeof window.uppy2.getPlugins === 'function') {
                    plugins = window.uppy2.getPlugins() || [];
                    console.log('🎯 Uppy2 plugins (new API):', plugins.map(p => p.id || p.constructor?.name || 'unknown'));
                } else if (window.uppy2.plugins) {
                    // Fallback to older Uppy API
                    plugins = Object.keys(window.uppy2.plugins || {}).map(key => ({
                        id: key,
                        plugin: window.uppy2.plugins[key]
                    }));
                    console.log('🎯 Uppy2 plugins (old API):', plugins.map(p => p.id || 'unknown'));
                }

                // Check for specific plugins
                hasDashboard = window.uppy2.getPlugin && typeof window.uppy2.getPlugin === 'function' ?
                    !!window.uppy2.getPlugin('Dashboard') :
                    !!(window.uppy2.plugins && window.uppy2.plugins.Dashboard);

                hasXHR = window.uppy2.getPlugin && typeof window.uppy2.getPlugin === 'function' ?
                    !!window.uppy2.getPlugin('XHR') :
                    !!(window.uppy2.plugins && window.uppy2.plugins.XHR);

                console.log('🎯 Dashboard plugin:', hasDashboard ? 'FOUND' : 'NOT FOUND');
                console.log('🎯 XHR plugin:', hasXHR ? 'FOUND' : 'NOT FOUND');

                // Don't re-add plugins - they should already be attached during initialization
                console.log('✅ Plugin check completed - plugins should be attached from initial setup');
            } catch (error) {
                console.error('❌ Error checking/re-initializing plugins:', error);
            }
        }, 100);
        
        console.log('🎯 Dashboard target element:', $(targetEl2Archive).length > 0 ? 'FOUND' : 'NOT FOUND');
        
                // Force Dashboard to render and ensure it's clickable
                setTimeout(() => {
                    if (window.uppy2 && $(targetEl2Archive).length > 0) {
                        console.log('🔧 Checking if Dashboard rendered...');
                        const targetEl = $(targetEl2Archive)[0];
                        console.log('🔧 Target element:', {
                            exists: !!targetEl,
                            visible: $(targetEl).is(':visible'),
                            display: $(targetEl).css('display'),
                            height: $(targetEl).height(),
                            width: $(targetEl).width(),
                        });

                        // Ensure target element is visible and has proper styling
                        $(targetEl).css({
                            display: 'block !important',
                            minHeight: '400px',
                            visibility: 'visible !important',
                            position: 'relative',
                            zIndex: 10,
                        });

                        // Check if plugins are properly attached
                        let pluginsCount = 0;
                        let hasDashboard = false;

                        try {
                            if (typeof window.uppy2.getPlugins === 'function') {
                                const plugins = window.uppy2.getPlugins() || [];
                                pluginsCount = plugins.length;
                                hasDashboard = plugins.some(p => p.id === 'Dashboard');
                            } else if (window.uppy2.plugins) {
                                pluginsCount = Object.keys(window.uppy2.plugins).length;
                                hasDashboard = !!window.uppy2.plugins.Dashboard;
                            }
                        } catch (e) {
                            console.error('❌ Error checking plugins:', e);
                        }

                        console.log('🔧 Plugins attached:', pluginsCount, 'Dashboard:', hasDashboard ? 'YES' : 'NO');

                        if (pluginsCount === 0 || !hasDashboard) {
                            console.warn('⚠️ No plugins attached or missing Dashboard, Dashboard may not render');
                            return;
                        }

                        const dashboardEl = $(targetEl2Archive).find('.uppy-Dashboard, .uppy-Dashboard-inner, .uppy-Dashboard-innerWrap');
                        console.log('🔧 Dashboard elements found:', dashboardEl.length);

                        if (dashboardEl.length > 0) {
                            console.log('✅ Dashboard is rendered');
                            // Ensure Dashboard is visible and clickable
                            dashboardEl.css({
                                display: 'block !important',
                                visibility: 'visible !important',
                                pointerEvents: 'auto !important',
                                opacity: '1 !important',
                            });

                            // Check for the browse button
                            const browseButton = $(targetEl2Archive).find('.uppy-Dashboard-browse, button[type="button"]');
                            console.log('🔧 Browse button found:', browseButton.length);
                            if (browseButton.length > 0) {
                                browseButton.css({
                                    display: 'inline-block !important',
                                    visibility: 'visible !important',
                                    pointerEvents: 'auto !important',
                                    cursor: 'pointer !important',
                                    zIndex: '99999 !important',
                                    position: 'relative',
                                    opacity: '1 !important',
                                });

                                // Add fallback click handler
                                browseButton.off('click.uppy-fallback').on('click.uppy-fallback', function(e) {
                                    console.log('🔧 Fallback click handler triggered (initial)');
                                    e.stopPropagation();
                                    const fileInput = $(targetEl2Archive).find('input[type="file"]').first();
                                    if (fileInput.length > 0) {
                                        console.log('🔧 Triggering file input click (initial)');
                                        fileInput[0].click();
                                    }
                                });

                                console.log('✅ Browse button is visible and clickable');
                            } else {
                                console.warn('⚠️ Browse button not found!');
                            }
                        } else {
                            console.warn('⚠️ Dashboard not rendered! Attempting to force render...');
                            try {
                                const dashboardPlugin = window.uppy2.getPlugin('Dashboard');
                                if (dashboardPlugin) {
                                    console.log('✅ Dashboard plugin found, attempting manual render');
                                    // Try to manually trigger render
                                    dashboardPlugin.render();
                                } else {
                                    console.error('❌ Dashboard plugin not found!');
                                }
                            } catch (e) {
                                console.error('❌ Error accessing Dashboard plugin:', e);
                            }
                        }
                    }
                }, 1000);

        // Add debug for file input changes
        $(targetEl2Archive).find('input[type="file"]').on('change', function() {
            console.log('🔍 Raw file input change detected:', this.files.length, 'files');
            if (this.files.length > 0) {
                console.log('📁 Files selected:', Array.from(this.files).map(f => f.name));
            }
        });

        // Load existing preview files into uppy2
        if (previewFilesPhotoArhive.length) {
            $(previewFilesPhotoArhive).each(function (i, item) {
                window.uppy2.addFile({
                    name: previewFilesPhotoArhive[i]['fileName'],
                    type: previewFilesPhotoArhive[i]['fileFormat'],
                    data: b64toBlob(previewFilesPhotoArhive[i]['fileContent']),
                    source: 'Local',
                    isRemote: false,
                });
            });
        }
        
        // Load preview files into uppy (avatar) if it exists
        if (window.uppy && previewFiles.length) {
            $(previewFiles).each(function (i, item) {
                window.uppy.addFile({
                    name: previewFiles[i]['fileName'],
                    type: previewFiles[i]['fileFormat'],
                    data: b64toBlob(previewFiles[i]['fileContent']),
                    source: 'Local',
                    isRemote: false,
                });
            });
        }
        
        // We now upload archive after main completes; no mirroring into main instance needed
        
        // Only initialize form wizard if we're on a form page
        if ($(targetEl).length) {
            $('.validation-wizard').steps({
                headerTag: 'h6',
                bodyTag: 'section',
                transitionEffect: 'fade',
                titleTemplate: '<span class="step">#index#</span> #title#',
                labels: {
                    finish: 'Отправить',
                    next: 'Далее',
                    previous: 'Назад'
                },
                onStepChanging: function (event, currentIndex, newIndex) {
                    // ✅ CRITICAL: When step 2 (photo archive) becomes visible, ensure Dashboard is clickable
                    if (newIndex === 1) { // Step 2 is index 1 (0-based)
                        console.log('🔧 Step 2 (Photo Archive) is becoming visible - ensuring Dashboard is clickable');
                        setTimeout(() => {
                            const targetEl2Archive = '#js--upload-person-photo-arhive';
                            if ($(targetEl2Archive).length > 0 && window.uppy2) {
                                // Force Dashboard to be visible and clickable
                                $(targetEl2Archive).css({
                                    display: 'block',
                                    visibility: 'visible',
                                    pointerEvents: 'auto',
                                    opacity: 1,
                                    minHeight: '400px',
                                    position: 'relative',
                                    zIndex: 10,
                                });
                                
                                const dashboardEl = $(targetEl2Archive).find('.uppy-Dashboard, .uppy-Dashboard-inner, .uppy-Dashboard-innerWrap');
                                dashboardEl.css({
                                    display: 'block',
                                    visibility: 'visible',
                                    pointerEvents: 'auto',
                                    opacity: 1,
                                });
                                
                                const browseButton = $(targetEl2Archive).find('.uppy-Dashboard-browse, button[type="button"]');
                                browseButton.css({
                                    display: 'inline-block',
                                    visibility: 'visible',
                                    pointerEvents: 'auto',
                                    cursor: 'pointer',
                                    zIndex: 100,
                                });
                                
                                console.log('✅ Dashboard forced to be visible on step 2');
                            }
                        }, 100);
                    }

                    if (currentIndex === 0) {
                        const state = uppy.getState();

                        if (jQuery.isEmptyObject(state.files)) {
                            Swal.fire('Обязательно загрузите фотографию', '', 'error');
                            return false
                        }
                    }
 

                    //step 2 validation
                    if (currentIndex === 1) {
                        // Ensure Dashboard is visible and clickable before validation
                        const targetEl2Archive = '#js--upload-person-photo-arhive';
                        if ($(targetEl2Archive).length > 0 && window.uppy2) {
                            $(targetEl2Archive).css({
                                display: 'block !important',
                                visibility: 'visible !important',
                                pointerEvents: 'auto !important',
                                opacity: '1 !important',
                            });

                            // Also ensure buttons are clickable
                            $(targetEl2Archive).find('.uppy-Dashboard-browse, button[type="button"]').css({
                                pointerEvents: 'auto !important',
                                cursor: 'pointer !important',
                            });
                        }

                        const state = window.uppy2.getState();

                        if (jQuery.isEmptyObject(state.files)) {
                            Swal.fire('Обязательно загрузите фотоархив', '', 'error');
                            return false
                        }

                    }

                    console.log(currentIndex);
                    if (currentIndex === 2) {
                        // Map is now always visible, just ensure it's initialized
                        if ($('#mapPerson').length) {
                            mapInit();
                        }
                    }
                    return (
                        currentIndex > newIndex ||
                        (!(3 === newIndex && Number($('#age-2').val()) < 18) &&
                            (currentIndex < newIndex &&
                            (form.find('.body:eq(' + newIndex + ') label.error').remove(),
                                form.find('.body:eq(' + newIndex + ') .error').removeClass('error')),
                                (form.validate().settings.ignore = ':disabled,:hidden'),
                                form.valid()))
                    );
                },
                onStepChanged: function (event, currentIndex, priorIndex) {
                    // ✅ CRITICAL: When step 2 (photo archive) is shown, ensure Dashboard is fully functional
                    if (currentIndex === 1) { // Step 2 is index 1 (0-based)
                        console.log('🔧 Step 2 (Photo Archive) is now active - ensuring Dashboard is clickable');
                        
                        setTimeout(() => {
                            const targetEl2Archive = '#js--upload-person-photo-arhive';
                            const targetEl = $(targetEl2Archive)[0];
                            
                            if (targetEl && window.uppy2) {
                                console.log('🔧 Forcing Dashboard visibility and clickability...');
                                
                                // Force target element visibility with !important
                                $(targetEl).css({
                                    'display': 'block',
                                    'visibility': 'visible',
                                    'pointer-events': 'auto',
                                    'opacity': '1',
                                    'min-height': '400px',
                                    'position': 'relative',
                                    'z-index': '1000',
                                });
                                
                                // Force all Dashboard elements to be visible
                                const dashboardEl = $(targetEl2Archive).find('.uppy-Dashboard, .uppy-Dashboard-inner, .uppy-Dashboard-innerWrap, .uppy-Dashboard-AddFiles');
                                dashboardEl.css({
                                    'display': 'block',
                                    'visibility': 'visible',
                                    'pointer-events': 'auto',
                                    'opacity': '1',
                                });
                                
                                // Force browse button to be visible and clickable
                                const browseButton = $(targetEl2Archive).find('.uppy-Dashboard-browse, button[type="button"].uppy-Dashboard-browse');
                                console.log('🔧 Browse buttons found:', browseButton.length);
                                browseButton.each(function() {
                                    const btn = $(this);
                                    btn.css({
                                        'display': 'inline-block !important',
                                        'visibility': 'visible !important',
                                        'pointer-events': 'auto !important',
                                        'cursor': 'pointer !important',
                                        'z-index': '99999 !important',
                                        'opacity:': '1 !important',
                                        'position': 'relative',
                                    });
                                    // Remove any disabled attributes
                                    btn.prop('disabled', false);
                                    btn.removeAttr('disabled');
                                    btn.removeClass('disabled');
                                    
                                    // Force parent elements to allow clicks
                                    btn.parents().css({
                                        'pointer-events': 'auto',
                                        'z-index': '9999',
                                    });
                                    
                                    // Add direct click handler as fallback
                                    btn.off('click.uppy-fallback').on('click.uppy-fallback', function(e) {
                                        console.log('🔧 Fallback click handler triggered');
                                        e.stopPropagation();
                                        // Try to trigger the hidden file input
                                        const fileInput = $(targetEl2Archive).find('input[type="file"]').first();
                                        if (fileInput.length > 0) {
                                            console.log('🔧 Triggering file input click');
                                            fileInput[0].click();
                                        }
                                    });
                                });
                                
                                // Force the drop zone to be clickable
                                const dropZone = $(targetEl2Archive).find('.uppy-Dashboard-dropFilesHereHint, .uppy-Dashboard-AddFiles, .uppy-Dashboard-innerWrap');
                                dropZone.css({
                                    'pointer-events': 'auto !important',
                                    'cursor': 'pointer !important',
                                    'z-index': '9998',
                                });
                                
                                // Make sure hidden file inputs are accessible
                                const fileInputs = $(targetEl2Archive).find('input[type="file"]');
                                fileInputs.css({
                                    'pointer-events': 'auto',
                                    'z-index': '99999',
                                });
                                
                                // Remove any overlays that might block clicks, but don't disable the button itself
                                $(targetEl2Archive).find('*').each(function() {
                                    const el = $(this);
                                    const zIndex = parseInt(el.css('z-index')) || 0;

                                    // Only disable overlays, not the interactive elements
                                    if (zIndex > 1000 && zIndex < 9999 && !el.hasClass('uppy-Dashboard-browse') && !el.is('button') && !el.is('input[type="file"]')) {
                                        console.log('⚠️ Found potential overlay:', this.tagName, this.className, 'z-index:', zIndex);
                                        el.css('pointer-events', 'none');
                                    }

                                    // Make sure the button and file input are ALWAYS clickable
                                    if (el.hasClass('uppy-Dashboard-browse') || el.is('button[type="button"].uppy-Dashboard-browse') || el.is('input[type="file"]')) {
                                        el.css({
                                            'pointer-events': 'auto !important',
                                            'cursor': 'pointer !important',
                                            'z-index': '100000 !important'
                                        });
                                        console.log('✅ Ensured button/input is clickable:', this.tagName, this.className);
                                    }
                                });
                                
                                console.log('✅ Dashboard forced to be visible and clickable on step 2');
                            } else {
                                console.warn('⚠️ Target element or uppy2 not found when step 2 activated');
                            }
                        }, 200);
                    }
                },
                onFinishing: function (event, currentIndex) {
                    return (form.validate().settings.ignore = ':disabled'), form.valid();
                },
                onFinished: function (event, currentIndex) {
                    console.log('🎯 Form finished, processing submission...');

                    // Ensure coordinates are properly saved before submission
                    transferTempCoordinatesToForm();

                    const avatarState = uppy.getState();
                    const photoState = uppy2.getState();

                    const hasAvatarFiles = !jQuery.isEmptyObject(avatarState.files);
                    const hasPhotoFiles = !jQuery.isEmptyObject(photoState.files);

                    console.log('📎 Avatar files:', hasAvatarFiles, 'Photo archive files:', hasPhotoFiles);

                    // Submit the form; main uploader will send avatar first, then archive will upload automatically
                    form.submit();
                },
            }),
                $('.validation-wizard').validate({
                    lang: 'ru',
                    ignore: 'input[type=hidden]',
                    errorClass: 'text-danger',
                    successClass: 'text-success',
                    highlight: function (element, errorClass) {
                        $(element).removeClass(errorClass);
                    },
                    unhighlight: function (element, errorClass) {
                        $(element).removeClass(errorClass);
                    },
                    errorPlacement: function (error, element) {
                        error.insertAfter(element);
                    },
                    rules: {
                        email: {
                            email: !0,
                        },
                        'person_create[emailClient][first]': {
                            minlength: 3,
                        },
                        'person_create[emailClient][second]': {
                            equalTo: ".js--client-email",
                            minlength: 3,
                        },
                    },
                    messages: {
                        email: {
                            required: "Это поле обязательное к заполнению",
                            email: "Не верный формат почтового ящика example@mail.com"
                        }
                    }
                });
        } // End of if ($(targetEl).length) for validation wizard

        $(".js--send-change-memory-link").on("click", function (e) {

            let uuid = $(this).data('uuid');
            $.ajax({
                type: "POST",
                url: Routing.generate('person_code_edit_link', {uuid}),
                success: function (data) {
                    console.log(data);
                    Swal.fire({
                        type: 'success',
                        title: 'Успешно',
                        text: 'Ссылка для изменения данных будет отправлена на e-mail, указанный при добавлении этой страницы',
                        icon: 'success',
                    });
                }
            })

        });
        $(".js--select-memory-thema").on("change", function () {
            const selectedOption = $(this).find('option:selected');

            if (!selectedOption.length) {
                return;
            }

            const themeNumber = selectedOption.data('theme-number');
            const themeClass = selectedOption.data('classname');
            const previewPath = selectedOption.data('preview');

            if (previewPath || themeNumber) {
                const resolvedPreview = previewPath || `/option-bg/v-${themeNumber}.jpg`;
                $('.js--preview-memory-bg').attr('src', resolvedPreview);
            }

            if (themeClass) {
                document.body.setAttribute('id', themeClass);
            } else if (themeNumber) {
                document.body.setAttribute('id', `bg-option-${themeNumber}`);
            }
        });

    });

    // Global function to update burial place coordinates
    window.updateBurialPlaceCoordinates = function(lat, lng) {
        console.log('🎯 COORDINATES SELECTED:', lat, lng);

        // Update the last burial place coordinates, or the first available fields
        let latFields = $('.burialPlace input[name*="[lat]"]');
        let lngFields = $('.burialPlace input[name*="[lng]"]');

        if (latFields.length > 0 && lngFields.length > 0) {
            // Update the last burial place (most recently added)
            latFields.last().val(lat);
            lngFields.last().val(lng);
            console.log('📍 Updated form fields with coordinates:', lat, lng);

            // Reverse geocode to get address
            reverseGeocodeAddress(lat, lng);
            return;
        }

        const autoAddHelper = window.__personFormAddBurialPlaceIfNeeded;

        if (typeof autoAddHelper === 'function' && autoAddHelper()) {
            console.log('📍 No burial places found, automatically adding one...');

            // Try again after a short delay to let the form fields be created
            setTimeout(() => {
                latFields = $('.burialPlace input[name*="[lat]"]');
                lngFields = $('.burialPlace input[name*="[lng]"]');

                if (latFields.length > 0 && lngFields.length > 0) {
                    latFields.last().val(lat);
                    lngFields.last().val(lng);
                    console.log('📍 Coordinates saved to newly created burial place:', lat, lng);

                    // Reverse geocode to get address for the new burial place
                    reverseGeocodeAddress(lat, lng);
                } else {
                    $('#temp_lat').val(lat);
                    $('#temp_lng').val(lng);
                    console.log('📍 Stored coordinates in temp fields (fallback after auto-add attempt):', lat, lng);
                }
            }, 200);

            return;
        }

        // Not on a form page; store coordinates in temp fields if available
        $('#temp_lat').val(lat);
        $('#temp_lng').val(lng);
        console.log('📍 Cannot auto-add burial place on this page, stored in temp fields:', lat, lng);
    };

    // Function to reverse geocode coordinates to get address
    function reverseGeocodeAddress(lat, lng) {
        try {
            if (typeof ymaps !== 'undefined') {
                ymaps.geocode([lat, lng]).then(function(res) {
                    const firstGeoObject = res.geoObjects.get(0);
                    if (firstGeoObject) {
                        const address = firstGeoObject.getAddressLine();

                        // Update address field if it exists (works for both input and textarea)
                        const addressFields = $('.burialPlace input[name*="[adress]"], .burialPlace textarea[name*="[adress]"]');
                        if (addressFields.length > 0) {
                            addressFields.last().val(address);
                            console.log('🏠 Address found and updated:', address);
                        }
                    }
                }).catch(function(error) {
                    console.log('Address geocoding failed, but coordinates saved:', error);
                });
            }
        } catch (error) {
            console.log('Address geocoding not available, coordinates saved without address');
        }
    }

    // Function to initialize search suggestions/autocomplete
    function initSearchSuggestions() {
        const searchInput = $('#burialPlaceSearch');
        let suggestionsContainer = null;
        let currentFocus = -1;

        // Create suggestions container
        function createSuggestionsContainer() {
            if (!suggestionsContainer) {
                suggestionsContainer = $('<div class="burial-search-suggestions" style="position: absolute; background: white; border: 1px solid #ddd; border-top: none; z-index: 1000; max-height: 200px; overflow-y: auto; width: 100%; border-radius: 0 0 4px 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>');
                searchInput.parent().css('position', 'relative').append(suggestionsContainer);
            }
            return suggestionsContainer;
        }

        // Hide suggestions
        function hideSuggestions() {
            if (suggestionsContainer) {
                suggestionsContainer.hide();
            }
            currentFocus = -1;
        }

        // Show suggestions
        function showSuggestions(suggestions) {
            const container = createSuggestionsContainer();
            container.empty();

            if (suggestions.length === 0) {
                container.hide();
                return;
            }

            suggestions.forEach((suggestion, index) => {
                const item = $(`<div class="suggestion-item" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid #eee; background: white; transition: background-color 0.2s;" data-index="${index}">${suggestion.displayName || suggestion.value}</div>`);

                item.on('click', function() {
                    searchInput.val(suggestion.value);
                    hideSuggestions();
                    // Auto-trigger search
                    $('#searchBurialPlaceBtn').click();
                });

                item.on('mouseenter', function() {
                    $('.suggestion-item').removeClass('active');
                    $(this).addClass('active').css('background-color', '#f8f9fa');
                    currentFocus = index;
                });

                item.on('mouseleave', function() {
                    if (!$(this).hasClass('active')) {
                        $(this).css('background-color', 'white');
                    }
                });

                container.append(item);
            });

            container.show();
        }

        // Handle input changes
        let searchTimeout;
        searchInput.on('input', function() {
            const query = $(this).val().trim();
            clearTimeout(searchTimeout);

            if (query.length < 2) {
                hideSuggestions();
                return;
            }

            searchTimeout = setTimeout(() => {
                // Try to get suggestions from Yandex Maps
                try {
                    // Use Yandex Maps suggest API if available
                    if (typeof ymaps !== 'undefined' && ymaps.suggest) {
                        ymaps.suggest(query, {
                            results: 5,
                            boundedBy: [[50, 20], [70, 60]] // Rough bounds for Russia/Europe
                        }).then(function(suggestions) {
                            if (suggestions && suggestions.length > 0) {
                                showSuggestions(suggestions.map(s => ({
                                    value: s.value,
                                    displayName: s.displayName || s.value
                                })));
                            } else {
                                // Fallback suggestions
                                showCommonSuggestions(query);
                            }
                        }).catch(function() {
                            showCommonSuggestions(query);
                        });
                    } else {
                        showCommonSuggestions(query);
                    }
                } catch (error) {
                    console.log('Suggestions API not available, using fallback');
                    showCommonSuggestions(query);
                }
            }, 300);
        });

        // Handle keyboard navigation
        searchInput.on('keydown', function(e) {
            if (!suggestionsContainer || !suggestionsContainer.is(':visible')) return;

            const items = suggestionsContainer.find('.suggestion-item');

            if (e.keyCode === 40) { // Down arrow
                e.preventDefault();
                currentFocus = Math.min(currentFocus + 1, items.length - 1);
                updateFocus();
            } else if (e.keyCode === 38) { // Up arrow
                e.preventDefault();
                currentFocus = Math.max(currentFocus - 1, 0);
                updateFocus();
            } else if (e.keyCode === 13) { // Enter
                e.preventDefault();
                if (currentFocus >= 0 && currentFocus < items.length) {
                    items.eq(currentFocus).click();
                } else {
                    $('#searchBurialPlaceBtn').click();
                }
            } else if (e.keyCode === 27) { // Escape
                hideSuggestions();
            }
        });

        function updateFocus() {
            const items = suggestionsContainer.find('.suggestion-item');
            items.removeClass('active').css('background-color', 'white');
            if (currentFocus >= 0 && currentFocus < items.length) {
                items.eq(currentFocus).addClass('active').css('background-color', '#f8f9fa');
            }
        }

        // Hide suggestions when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.burial-search-suggestions, #burialPlaceSearch').length) {
                hideSuggestions();
            }
        });

        // Common suggestions fallback
        function showCommonSuggestions(query) {
            const commonPlaces = [
                'Москва, Россия',
                'Санкт-Петербург, Россия',
                'Новодевичий монастырь, Москва',
                'Ваганьковское кладбище, Москва',
                'Кунцево, Москва',
                'Троекуровское кладбище, Москва',
                'Донское кладбище, Москва'
            ];

            const filtered = commonPlaces.filter(place =>
                place.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 5);

            if (filtered.length > 0) {
                showSuggestions(filtered.map(place => ({
                    value: place,
                    displayName: place
                })));
            } else {
                hideSuggestions();
            }
        }
    }

    // Function to initialize burial place search and location functionality
    function initBurialPlaceSearch() {
        // Initialize search suggestions (autocomplete)
        initSearchSuggestions();

        // Search button functionality
        $('#searchBurialPlaceBtn').on('click', function() {
            const searchQuery = $('#burialPlaceSearch').val().trim();
            if (!searchQuery) {
                alert('Пожалуйста, введите адрес или ФИО для поиска');
                return;
            }

            if (!window.burialPlaceMap) {
                alert('Карта не инициализирована');
                return;
            }

            // Show loading state
            const searchBtn = $(this);
            const originalText = searchBtn.html();
            searchBtn.html('<i class="fas fa-spinner fa-spin"></i>');
            searchBtn.prop('disabled', true);

            // Use Yandex Maps geocoding to search for the location
            ymaps.geocode(searchQuery, {
                results: 5 // Get more results for better suggestions
            }).then(function (res) {
                const geoObjects = res.geoObjects;
                if (geoObjects.getLength() > 0) {
                    const firstGeoObject = geoObjects.get(0);
                    const coords = firstGeoObject.geometry.getCoordinates();
                    const address = firstGeoObject.getAddressLine();

                    // Move map to found location
                    window.burialPlaceMap.setCenter(coords, 16);
                    window.burialPlacePlacemark.geometry.setCoordinates(coords);

                    // Update form coordinates
                    window.updateBurialPlaceCoordinates(coords[0], coords[1]);

                    // Update address field if it exists (works for both input and textarea)
                    const addressFields = $('.burialPlace input[name*="[adress]"], .burialPlace textarea[name*="[adress]"]');
                    if (addressFields.length > 0) {
                        addressFields.last().val(address);
                    }

                    console.log('📍 Location found:', address, coords);

                    // Show success message
                    if (geoObjects.getLength() > 1) {
                        console.log(`Found ${geoObjects.getLength()} results, showing the first one`);
                    }
                } else {
                    alert('Местоположение не найдено. Попробуйте более точный адрес или название.');
                }

                // Reset button
                searchBtn.html(originalText);
                searchBtn.prop('disabled', false);
            }).catch(function (error) {
                console.error('Geocoding error:', error);

                let errorMessage = 'Ошибка поиска. ';
                if (error.message && error.message.includes('scriptError')) {
                    errorMessage += 'Возможно, превышен лимит запросов или проблемы с API. Попробуйте позже.';
                } else if (error.message && error.message.includes('InvalidKey')) {
                    errorMessage += 'Проблемы с API ключом. Обратитесь к администратору.';
                } else {
                    errorMessage += 'Попробуйте еще раз или введите более точный адрес.';
                }

                alert(errorMessage);

                // Reset button
                searchBtn.html(originalText);
                searchBtn.prop('disabled', false);
            });
        });

        // Allow search on Enter key
        $('#burialPlaceSearch').on('keypress', function(e) {
            if (e.which === 13) {
                e.preventDefault();
                $('#searchBurialPlaceBtn').click();
            }
        });

        // Current location button functionality
        $('#currentLocationBtn').on('click', function() {
            if (!navigator.geolocation) {
                alert('Геолокация не поддерживается вашим браузером');
                return;
            }

            // Show loading state
            const btn = $(this);
            const originalText = btn.html();
            btn.html('<i class="fas fa-spinner fa-spin"></i> Определение...');
            btn.prop('disabled', true);

            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;

                    console.log('📍 Current location:', lat, lng);

                    // Update map and placemark
                    if (window.burialPlaceMap && window.burialPlacePlacemark) {
                        window.burialPlaceMap.setCenter([lat, lng], 16);
                        window.burialPlacePlacemark.geometry.setCoordinates([lat, lng]);
                        window.updateBurialPlaceCoordinates(lat, lng);
                    }

                    // Reset button
                    btn.html(originalText);
                    btn.prop('disabled', false);
                },
                function(error) {
                    console.error('Geolocation error:', error);

                    // Only show error if it's not permission denied (which is expected behavior)
                    if (error.code !== error.PERMISSION_DENIED) {
                        let errorMessage = 'Не удалось определить местоположение: ';
                        switch(error.code) {
                            case error.POSITION_UNAVAILABLE:
                                errorMessage += 'Информация о местоположении недоступна';
                                break;
                            case error.TIMEOUT:
                                errorMessage += 'Превышено время ожидания';
                                break;
                            default:
                                errorMessage += 'Неизвестная ошибка';
                        }
                        // Commented out error alert - functionality still works
                        // alert(errorMessage);
                        console.log('Geolocation error (commented out):', errorMessage);
                    } else {
                        console.log('User denied geolocation permission - this is normal');
                    }

                    // Reset button
                    btn.html(originalText);
                    btn.prop('disabled', false);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 300000 // 5 minutes
                }
            );
        });
    }
};


export default personForm;
