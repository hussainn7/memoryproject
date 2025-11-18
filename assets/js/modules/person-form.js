import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import Form from "@uppy/form";
import FileInput from '@uppy/file-input';
import XHR from '@uppy/xhr-upload';
import Russian from '@uppy/locales/lib/ru_RU';
import FormValidation from '../../extra-libs/formvalidation-es6/core/Core';
import ImageEditor from '@uppy/image-editor';

const personForm = function ($, Routing) {
    $(document).ready(function () {

        $('.js--select-memory-thema').trigger('change');

        let lat = $('.lat').val();
        let lng = $('.lng').val();

        // Optional Yandex Maps geolocation helper (non-breaking, keeps Mapbox UI)
        const YM_KEY = '2e1510a2-a865-4d6e-aae3-839289d6bf95'; // TODO: move to env
        let yMapsLoaded = false;
        const loadYMaps = () => {
            if (typeof window.ymaps !== 'undefined') { yMapsLoaded = true; return Promise.resolve(); }
            return new Promise((resolve) => {
                const s = document.createElement('script');
                s.src = `https://api-maps.yandex.ru/2.1/?apikey=${YM_KEY}&lang=ru_RU`;
                s.async = true;
                s.onload = () => { yMapsLoaded = true; resolve(); };
                document.head.appendChild(s);
            });
        };

        const tryPopulateLocationWithYandex = async (onLocated) => {
            try {
                await loadYMaps();
                if (typeof window.ymaps === 'undefined') return;
                window.ymaps.ready(() => {
                    window.ymaps.geolocation.get({ provider: 'browser', autoReverseGeocode: true })
                        .then((res) => {
                            const pos = res.geoObjects.get(0).geometry.getCoordinates();
                            const address = res.geoObjects.get(0).getAddressLine && res.geoObjects.get(0).getAddressLine();
                            if ($('.lat').length && !$('.lat').val()) { $('.lat').val(pos[0]); }
                            if ($('.lng').length && !$('.lng').val()) { $('.lng').val(pos[1]); }
                            if ($('.adress').length && address) { $('.adress').val(address); }
                            if (typeof onLocated === 'function') { onLocated({ lat: pos[0], lng: pos[1], address }); }
                        })
                        .catch(() => {});
                });
            } catch (e) { /* silent */ }
        };

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
            // Map is now always visible, just initialize it
            if (!window.personMapInitialized) {
                mapInit();
            }
        });

        // Auto-initialize burial place on page load if none exist
        $(document).ready(function() {
            setTimeout(function() {
                const burialPlaceList = $('.burialPlace li');
                const mapElement = $('#mapPerson');
                
                // If map exists and no burial places exist, auto-add one
                if (mapElement.length && burialPlaceList.length === 0) {
                    const addButton = $('.js--add-burialPlace');
                    if (addButton.length) {
                        addButton.trigger('click');
                    }
                } else if (mapElement.length && burialPlaceList.length > 0) {
                    // Map exists and burial place already exists, just initialize map
                    if (!window.personMapInitialized) {
                        mapInit();
                    }
                }
            }, 500);
        });


        $(document).on('click', '.js--delete-burialPlace', function (e) {

            let parent = $(this).parent();

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
            // Prevent multiple initializations
            if (window.personMapInitialized) {
                console.log('Map already initialized, skipping...');
                return;
            }
            window.personMapInitialized = true;

            setTimeout(function () {


                let lng = $('.lng').val() ? $('.lng').val() : '37.554263';
                let lat = $('.lat').val() ? $('.lat').val() : '55.724596';


                console.log(lng);
                console.log(lat);

                // Switched to Yandex Maps (Mapbox left commented intentionally)
                // mapboxgl.accessToken = '...';
                // const map = new mapboxgl.Map({ ... });

                loadYMaps().then(() => {
                    if (typeof window.ymaps === 'undefined') return;
                    window.ymaps.ready(() => {
                        const map = new window.ymaps.Map('mapPerson', {
                            center: [lat, lng],
                            zoom: 13,
                            controls: ['zoomControl', 'geolocationControl']
                        });

                        let marker = new window.ymaps.Placemark([lat, lng], {}, { draggable: true });
                        map.geoObjects.add(marker);

                        const updateFields = (coords) => {
                            const [newLat, newLng] = coords;

                            // Update the last burial place form fields (most recently added)
                            const lastLatField = $('.burialPlace li:last-child input[name*="[lat]"]');
                            const lastLngField = $('.burialPlace li:last-child input[name*="[lng]"]');
                            const lastAdressField = $('.burialPlace li:last-child input[name*="[adress]"], .burialPlace li:last-child textarea[name*="[adress]"]');

                            if (lastLatField.length) {
                                lastLatField.val(newLat);
                            }
                            if (lastLngField.length) {
                                lastLngField.val(newLng);
                            }

                            // Try to reverse geocode for address field if present
                            if (lastAdressField.length) {
                                window.ymaps.geocode(coords).then(function (res) {
                                    const first = res.geoObjects.get(0);
                                    if (first) {
                                        const addr = first.getAddressLine();
                                        if (addr) {
                                            lastAdressField.val(addr);
                                        }
                                    }
                                });
                            }
                        };

                        // Initialize form fields with current coordinates
                        updateFields([lat, lng]);

                        marker.events.add('dragend', function () {
                            const coords = marker.geometry.getCoordinates();
                            updateFields(coords);
                        });

                        // Set by map click
                        map.events.add('click', function (e) {
                            const coords = e.get('coords');
                            marker.geometry.setCoordinates(coords);
                            updateFields(coords);
                        });

                        // Add "Моя локация" button
                        const myLocationBtn = new window.ymaps.control.Button({
                            data: { content: 'Моя локация' },
                            options: { maxWidth: 200 }
                        });
                        myLocationBtn.events.add('click', function () {
                            window.ymaps.geolocation.get({ provider: 'browser', autoReverseGeocode: true })
                                .then((res) => {
                                    const coords = res.geoObjects.get(0).geometry.getCoordinates();
                                    marker.geometry.setCoordinates(coords);
                                    map.setCenter(coords, 15, { duration: 200 });
                                    updateFields(coords);
                                })
                                .catch(() => {});
                        });
                        map.controls.add(myLocationBtn, { position: { right: 10, top: 10 } });
                    });
                });
            }, 1200);
        }

            }, 1200);
        }


        //{{ path('admin_qrcode_view', {id: qrcode.id}) }}


        //default target is person/new
        let targetEl = '#js--upload-person-avatar';
        let targetEl2 = '#js--upload-person-photo-arhive';

        // let endpoint = '/person/code/'+'b9e7aa0b-1c80-4b33-8ae7-a9a56989d71e';
        const uuidEl = $('.js--uuid');
        let uuid = uuidEl.length ? String(uuidEl.val() || '').trim() : null;
        if (!uuid && window && window.location && typeof window.location.pathname === 'string') {
            const m = window.location.pathname.match(/\/person\/code\/([^/]+)/);
            if (m && m[1]) {
                uuid = m[1];
            }
        }

        let endpoint = uuid ? Routing.generate('person_code', { uuid }) : null;

        if (endpoint) {
            console.log(endpoint);
        }

        let previewFiles = [];
        let previewFilesPhotoArhive = [];

        let type = $(formClass).data('type') || null;
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

        if ($(targetEl).length) {

            setTimeout(function () {
                // Attempt to prefill location via Yandex if empty
                tryPopulateLocationWithYandex();

                window.uppy = new Uppy({
                    locale: Russian,
                    id: 'id_1',
                    allowMultipleUploadBatches: false,
                    autoProceed: false,
                    debug: true,
                    restrictions: {
                        maxFileSize: 52428800,//50 MB
                        maxNumberOfFiles: 1,
                        minNumberOfFiles: 1,
                        allowedFileTypes: ["image/*"]
                    },
                    onBeforeFileAdded: function (currentFile, files) {
                        currentFile.meta.name = '_' + currentFile.name.toLowerCase();
                        return currentFile;
                    },

                    onBeforeUpload: (files) => {
                        try {
                            console.log('onBeforeUpload triggered');
                            
                            // Get files from both dashboards
                            const avatarFiles = uppy.getFiles();
                            const archiveFiles = uppy2.getFiles();
                            
                            console.log('Files before merge:', {
                                avatar: avatarFiles,
                                archive: archiveFiles
                            });

                            // Mark avatar file
                            const updatedFiles = {};
                            Object.keys(files).forEach((fileID) => {
                                const file = files[fileID];
                                if (file.source === 'Dashboard') {
                                    updatedFiles[fileID] = {
                                        ...file,
                                        name: 'Avatar_@_6226922',
                                        meta: {
                                            ...file.meta,
                                            type: 'avatar'
                                        }
                                    };
                                }
                            });

                            // Add archive files
                            Object.values(archiveFiles).forEach((file) => {
                                updatedFiles[file.id] = {
                                    ...file,
                                    meta: {
                                        ...file.meta,
                                        type: 'archive'
                                    }
                                };
                            });

                            console.log('Files after merge:', updatedFiles);

                            // Validate files
                            const hasAvatar = Object.values(updatedFiles).some(f => f.meta.type === 'avatar');
                            const hasArchive = Object.values(updatedFiles).some(f => f.meta.type === 'archive');

                            if (!hasAvatar) {
                                throw new Error('Пожалуйста, загрузите фотографию');
                            }
                            if (!hasArchive) {
                                throw new Error('Пожалуйста, загрузите фотоархив');
                            }

                            return updatedFiles;
                        } catch (e) {
                            console.error('onBeforeUpload error:', e);
                            Swal.fire({
                                icon: 'error',
                                title: 'Ошибка при подготовке файлов',
                                text: e.message
                            });
                            throw e;
                        }
                    },
                    meta: {
                        'isUploadFiles': true
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
                    // NOTE: XHR upload disabled to avoid conflicting uploads.
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
                        submitOnSuccess: false,
                        triggerUploadOnSubmit: false,
                    });

                window.uppy2 = new Uppy({
                    locale: Russian,
                    id: 'id_2',
                    allowMultipleUploadBatches: false,
                    restrictions: {
                        maxFileSize: 52428800,//50 MB
                        maxNumberOfFiles: 5, // Always limit to 5 photos
                        minNumberOfFiles: 1,
                        allowedFileTypes: ["image/*"]
                    },
                    meta: {
                        'isUploadFiles': true
                    },
                })
                    .use(Dashboard, {
                        inline: true,
                        width: "100%",
                        height: 650,
                        hideUploadButton: true,
                        target: targetEl2,
                        trigger: targetEl2,
                        showProgressDetails: true,
                        proudlyDisplayPoweredByUppy: false,
                    })
                    // Note: do NOT attach a second XHR plugin here, files are merged into uppy
                    .use(Form, {
                        target: '.js--person-form',
                        getMetaFromForm: true,
                        addResultToForm: true,
                        submitOnSuccess: false,
                        triggerUploadOnSubmit: false,
                    });

                // Listen for restriction failures - show payment option for both create and edit
                uppy2.on('restriction-failed', (file, error) => {
                    // Show payment option for both creation and editing
                    setTimeout(() => {
                        if (type === 'create') {
                            // During creation: offer to pay upfront and unlock unlimited photos
                            Swal.fire({
                                title: 'Лимит фотографий достигнут',
                                html: `
                                    <p>Базовый план позволяет загрузить до <strong>5 фотографий</strong>.</p>
                                    <p><strong>Хотите загрузить больше фотографий прямо сейчас?</strong></p>
                                    <p>Оплатите <strong>500 ₽</strong> для расширенного доступа и загружайте неограниченное количество фото!</p>
                                    <p style="font-size: 0.9em; color: #666; margin-top: 10px;">Оплата будет обработана после создания страницы.</p>
                                `,
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: '💳 Оплатить 500 ₽',
                                cancelButtonText: 'Отмена',
                                confirmButtonColor: '#28a745',
                                cancelButtonColor: '#6c757d',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    // Mark that user wants to pay for extended access
                                    window.pendingPhotoExtension = true;
                                    
                                    // Update uppy2 restrictions to allow unlimited files
                                    uppy2.setOptions({
                                        restrictions: {
                                            maxFileSize: 52428800,
                                            maxNumberOfFiles: null, // Remove limit
                                            minNumberOfFiles: 1,
                                            allowedFileTypes: ["image/*"]
                                        }
                                    });
                                    
                                    // Show confirmation
                                    Swal.fire({
                                        title: 'Отлично!',
                                        html: `
                                            <p>Теперь вы можете загружать неограниченное количество фотографий.</p>
                                            <p>Оплата <strong>500 ₽</strong> будет автоматически списана после создания страницы.</p>
                                        `,
                                        icon: 'success',
                                        confirmButtonText: 'Продолжить',
                                        timer: 3000
                                    }).then(() => {
                                        // Try to add the file again
                                        if (file) {
                                            uppy2.addFile(file);
                                        }
                                    });
                                }
                            });
                        } else {
                            // During edit: offer payment option
                            Swal.fire({
                                title: 'Лимит фотографий достигнут',
                                html: `
                                    <p>Базовый план позволяет загрузить до <strong>5 фотографий</strong>.</p>
                                    <p><strong>Хотите загрузить больше фотографий?</strong></p>
                                    <p>Оплатите <strong>500 ₽</strong> для расширения доступа и загружайте неограниченное количество фото!</p>
                                `,
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: '💳 Оплатить 500 ₽',
                                cancelButtonText: 'Отмена',
                                confirmButtonColor: '#28a745',
                                cancelButtonColor: '#6c757d',
                            }).then(async (result) => {
                                if (result.isConfirmed) {
                                    // Charge from user balance
                                    try {
                                        Swal.fire({
                                            title: 'Обработка платежа',
                                            text: 'Пожалуйста, подождите...',
                                            allowOutsideClick: false,
                                            allowEscapeKey: false,
                                            showConfirmButton: false,
                                            didOpen: () => {
                                                Swal.showLoading();
                                            }
                                        });

                                        const uuid = $('.js--uuid').val();
                                        const response = await fetch(Routing.generate('person_upgrade_photo_limit', { uuid }), {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json',
                                            },
                                            credentials: 'same-origin'
                                        });

                                        const data = await response.json();

                                        if (response.ok && data.success) {
                                            Swal.fire({
                                                title: 'Успешно!',
                                                html: `
                                                    <p>Расширение активировано!</p>
                                                    <p>Теперь вы можете загружать неограниченное количество фотографий.</p>
                                                    <p>С вашего баланса списано: <strong>500 ₽</strong></p>
                                                `,
                                                icon: 'success',
                                                confirmButtonText: 'Продолжить'
                                            }).then(() => {
                                                // Update uppy2 restrictions to allow unlimited files
                                                uppy2.setOptions({
                                                    restrictions: {
                                                        maxFileSize: 52428800,
                                                        maxNumberOfFiles: null, // Remove limit
                                                        minNumberOfFiles: 1,
                                                        allowedFileTypes: ["image/*"]
                                                    }
                                                });
                                                
                                                // Mark as extended globally
                                                window.memoryIsExtended = true;
                                                
                                                // Try to add the file again
                                                if (file) {
                                                    uppy2.addFile(file);
                                                }
                                            });
                                        } else {
                                            throw new Error(data.message || 'Ошибка при обработке платежа');
                                        }
                                    } catch (error) {
                                        console.error('Payment error:', error);
                                        Swal.fire({
                                            title: 'Ошибка',
                                            text: error.message || 'Не удалось обработать платеж. Попробуйте позже.',
                                            icon: 'error',
                                            confirmButtonText: 'Понятно'
                                        });
                                    }
                                }
                            });
                        }
                    }, 100);
                });

                // Override the info-visible event to suppress default Uppy notification
                uppy2.on('info-visible', () => {
                    const uppyInfo = document.querySelector('.uppy-Informer');
                    if (uppyInfo && uppyInfo.textContent.includes('файлов')) {
                        uppyInfo.style.display = 'none';
                    }
                });


                if (previewFiles.length) {
                    $(previewFiles).each(function (i, item) {
                        uppy.addFile({
                            name: previewFiles[i]['fileName'],
                            type: previewFiles[i]['fileFormat'],
                            data: b64toBlob(previewFiles[i]['fileContent']),
                            source: 'Local',
                            isRemote: false,
                        });
                    });
                }

                if (previewFilesPhotoArhive.length) {
                    $(previewFilesPhotoArhive).each(function (i, item) {
                        uppy2.addFile({
                            name: previewFilesPhotoArhive[i]['fileName'],
                            type: previewFilesPhotoArhive[i]['fileFormat'],
                            data: b64toBlob(previewFilesPhotoArhive[i]['fileContent']),
                            source: 'Local',
                            isRemote: false,
                        });
                    });
                }


            }, 100);

            const wizard = $('.validation-wizard').steps({
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
                    console.log('Step changing:', currentIndex, '->', newIndex);

                    // Allow going backwards without validation
                    if (currentIndex > newIndex) return true;

                    // Validate current step before proceeding
                    form.validate().settings.ignore = ':disabled,:hidden';
                    let stepValid = form.valid();
                    console.log('Step validation:', stepValid);

                    // Additional step-specific validation
                    if (currentIndex === 0) {
                        const state = uppy.getState();
                        if (jQuery.isEmptyObject(state.files)) {
                            Swal.fire('Обязательно загрузите фотографию', '', 'error');
                            return false;
                        }
                    }

                    if (currentIndex === 1) {
                        const state = uppy2.getState();
                        if (jQuery.isEmptyObject(state.files)) {
                            Swal.fire('Обязательно загрузите фотоархив', '', 'error');
                            return false;
                        }
                    }

                    if (currentIndex === 3) {
                        // Step 4 (burial place) - ensure map is initialized
                        const mapElement = $('#mapPerson');
                        if (mapElement.length && !window.personMapInitialized) {
                            mapInit();
                        }
                    }

                    // Clean up errors on the next step
                    if (stepValid) {
                        form.find('.body:eq(' + newIndex + ') label.error').remove();
                        form.find('.body:eq(' + newIndex + ') .error').removeClass('error');
                    }

                    return stepValid;
                },
                onFinishing: function (event, currentIndex) {
                    console.log('onFinishing triggered');
                    
                    // Validate all fields
                    form.validate().settings.ignore = ':disabled';
                    const isValid = form.valid();
                    console.log('Final validation:', isValid);

                    // Check theme
                    const themaSelect = $('.js--select-memory-thema');
                    console.log('Current theme value:', themaSelect.val());
                    if (!themaSelect.val()) {
                        // Try to set default theme if none selected
                        themaSelect.val('1').trigger('change');
                        if (!themaSelect.val()) {
                            console.error('Failed to set theme value');
                            Swal.fire({
                                title: 'Ошибка выбора темы',
                                text: 'Пожалуйста, попробуйте выбрать тему вручную или обновите страницу',
                                icon: 'error'
                            });
                            return false;
                        }
                    }

                    return isValid;
                },
                    onFinished: function (event, currentIndex) {
                    console.log('onFinished triggered');
                    
                    // Check if already uploading
                    if (uppy.getState().isUploadInProgress) {
                        console.log('Upload already in progress, preventing duplicate upload');
                        return false;
                    }
                    
                    // Log form state
                    console.log('Form data:', $(form).serialize());
                    console.log('UUID:', $('.js--uuid').val());
                    console.log('Uppy files:', uppy.getFiles());
                    console.log('Uppy2 files:', uppy2.getFiles());
                    
                    // Double check validation
                    if (!form.valid()) {
                        console.log('Form invalid on finish');
                        // Log which fields are invalid
                        const invalidFields = $(form).find(':invalid');
                        console.log('Invalid fields:', invalidFields.map(function() {
                            return {
                                name: this.name,
                                value: this.value,
                                validationMessage: this.validationMessage
                            };
                        }).get());
                        Swal.fire('Пожалуйста, заполните все обязательные поля', '', 'error');
                        return false;
                    }

                    // Check required files
                    const avatarFiles = uppy.getFiles();
                    const archiveFiles = uppy2.getFiles();
                    
                    if (avatarFiles.length === 0) {
                        Swal.fire('Ошибка', 'Пожалуйста, загрузите фотографию', 'error');
                        return false;
                    }
                    
                    if (archiveFiles.length === 0) {
                        Swal.fire('Ошибка', 'Пожалуйста, загрузите фотоархив', 'error');
                        return false;
                    }

                    // Show loading state
                    Swal.fire({
                        title: 'Отправка формы',
                        text: 'Пожалуйста, подождите...',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        showConfirmButton: false,
                        didOpen: () => {
                            Swal.showLoading();
                        }
                    });

                    // Create FormData with ALL form fields
                    const formData = new FormData(form[0]);
                    // explicit flag for backend diagnostics
                    formData.append('isUploadFiles', '1');
                    
                    // Add flag if user wants photo extension during creation
                    if (window.pendingPhotoExtension) {
                        formData.append('wantPhotoExtension', '1');
                    }

                    // Add avatar (first file only) - mark it properly for backend
                    if (avatarFiles.length > 0) {
                        const av = avatarFiles[0];
                        // Use original name if it exists, otherwise create one
                        let avatarName = av.name || 'avatar.jpg';
                        // Add Avatar marker if not already present
                        if (!avatarName.includes('Avatar_@_6226922')) {
                            const ext = av.extension || avatarName.split('.').pop() || 'jpg';
                            avatarName = 'Avatar_@_6226922.' + ext;
                        }
                        formData.append('avatar', av.data, avatarName);
                        console.log('Adding avatar file:', avatarName);
                    }

                    // Add all archive files
                    archiveFiles.forEach((file, index) => {
                        const name = file && file.name ? file.name : `archive_${index}.jpg`;
                        formData.append('archive[]', file.data, name);
                        console.log('Adding archive file:', name);
                    });
                    
                    console.log('Submitting complete form with files:', {
                        avatarCount: avatarFiles.length,
                        archiveCount: archiveFiles.length,
                        formData: Array.from(formData.entries()).map(([k, v]) => [
                            k,
                            v instanceof File ? `File: ${v.name}` : v
                        ])
                    });

                    // Debug burial place coordinates
                    const burialPlaceLat = formData.get('person_create[burialPlace][0][lat]');
                    const burialPlaceLng = formData.get('person_create[burialPlace][0][lng]');
                    const burialPlaceAddress = formData.get('person_create[burialPlace][0][adress]');
                    console.log('Burial place form data:', {
                        lat: burialPlaceLat,
                        lng: burialPlaceLng,
                        address: burialPlaceAddress
                    });
                    
                    // Submit everything at once to the main endpoint via fetch
                    fetch(endpoint, {
                        method: 'POST',
                        body: formData,
                        credentials: 'same-origin'
                    }).then(async (res) => {
                        const text = await res.text();
                        let json;
                        try { json = JSON.parse(text); } catch(_) { json = { message: text }; }
                        if (res.ok) {
                            console.log('Upload success:', json);
                            const url = Routing.generate('person_code', {uuid: $('.js--uuid').val()});
                            window.location.href = url;
                            return;
                        }
                        throw new Error(json.error || json.message || `HTTP ${res.status}`);
                    }).catch((err) => {
                        console.error('Upload failed:', err);
                        Swal.fire({
                            icon: 'error',
                            title: 'Ошибка при отправке формы',
                            text: err.message || 'Произошла ошибка при загрузке. Попробуйте еще раз.',
                            showConfirmButton: true
                        });
                    });
                }
            });
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
                            required: true,
                        },
                        'person_create[emailClient][first]': {
                            required: true,
                            minlength: 3,
                            email: true,
                        },
                        'person_create[emailClient][second]': {
                            required: true,
                            equalTo: ".js--client-email",
                            minlength: 3,
                            email: true,
                        },
                        'person_create[firstName]': {
                            required: true,
                            minlength: 2,
                        },
                        'person_create[lastName]': {
                            required: true,
                            minlength: 2,
                        },
                        'person_create[patronymic]': {
                            required: true,
                            minlength: 2,
                        },
                        'person_create[dateBirth]': {
                            required: true,
                        },
                        'person_create[dateDeads]': {
                            required: true,
                        },
                        'person_create[biography]': {
                            required: true,
                            minlength: 10,
                        },
                        'person_create[thema]': {
                            required: true,
                        },
                        'person_create[politics]': {
                            required: true,
                        }
                    },
                    messages: {
                        email: {
                            required: "Это поле обязательное к заполнению",
                            email: "Не верный формат почтового ящика example@mail.com"
                        },
                        'person_create[emailClient][first]': {
                            required: "Пожалуйста, введите email",
                            email: "Пожалуйста, введите корректный email",
                            minlength: "Email должен быть не короче 3 символов"
                        },
                        'person_create[emailClient][second]': {
                            required: "Пожалуйста, подтвердите email",
                            equalTo: "Email не совпадает",
                            email: "Пожалуйста, введите корректный email",
                            minlength: "Email должен быть не короче 3 символов"
                        },
                        'person_create[firstName]': {
                            required: "Пожалуйста, введите имя",
                            minlength: "Имя должно быть не короче 2 символов"
                        },
                        'person_create[lastName]': {
                            required: "Пожалуйста, введите фамилию",
                            minlength: "Фамилия должна быть не короче 2 символов"
                        },
                        'person_create[patronymic]': {
                            required: "Пожалуйста, введите отчество",
                            minlength: "Отчество должно быть не короче 2 символов"
                        },
                        'person_create[dateBirth]': {
                            required: "Пожалуйста, укажите дату рождения"
                        },
                        'person_create[dateDeads]': {
                            required: "Пожалуйста, укажите дату смерти"
                        },
                        'person_create[biography]': {
                            required: "Пожалуйста, введите биографию",
                            minlength: "Биография должна быть не короче 10 символов"
                        },
                        'person_create[thema]': {
                            required: "Пожалуйста, выберите тему"
                        },
                        'person_create[politics]': {
                            required: "Пожалуйста, примите политику конфиденциальности"
                        }
                    }
                });
        }

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
        // Initialize theme selector (guarded)
        const themaSelect = $(".js--select-memory-thema");
        if (themaSelect.length) {
            console.log('Theme selector:', {
                element: 'found',
                value: themaSelect.val(),
                options: themaSelect.find('option').length
            });

            // Handle theme changes
            themaSelect.on("change", function () {
                try {
                    const thema = $(this).val();
                    if (!thema) { return; }
                    console.log('Theme selected:', thema);

                    // Validate theme number
                    const themeNum = parseInt(thema);
                    if (themeNum < 1 || themeNum > 7) {
                        console.warn('Invalid theme number:', themeNum);
                        return;
                    }

                    // Update preview image
                    const path = '/option-bg/v-' + thema + '.jpg';
                    $('.js--preview-memory-bg').attr('src', path);

                    // Update live page theme (body class)
                    const themeClass = 'bg-option-' + thema;
                    $('body').attr('id', themeClass);
                    console.log('Applied theme class:', themeClass);

                } catch (error) {
                    console.error('Error changing theme:', error);
                    // Don't let theme errors break the form
                }
            });

            // Initialize theme selector if empty
            if (!themaSelect.val()) {
                const firstOption = themaSelect.find('option:not([value=""])').first();
                if (firstOption.length) {
                    themaSelect.val(firstOption.val()).trigger('change');
                } else {
                    console.warn('Theme selector has no options');
                }
            } else {
                // If theme is already selected, apply it to the page
                themaSelect.trigger('change');
            }
        } else {
            console.warn('Theme selector not found');
        }

    });
};


export default personForm;
