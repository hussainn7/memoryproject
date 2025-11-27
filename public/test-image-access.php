<?php
echo "Testing image access...\n\n";

$testImage = __DIR__ . '/img/692620b3b235d_Avatar___6226922.png';
echo "Test image path: $testImage\n";
echo "Symlink target: " . readlink(__DIR__) . "\n";
echo "File exists: " . (file_exists($testImage) ? 'YES' : 'NO') . "\n";
echo "Is readable: " . (is_readable($testImage) ? 'YES' : 'NO') . "\n";

if (file_exists($testImage)) {
    $stat = stat($testImage);
    echo "File size: " . filesize($testImage) . " bytes\n";
    echo "File perms: " . substr(sprintf('%o', fileperms($testImage)), -4) . "\n";
    echo "Owner UID: " . $stat['uid'] . "\n";
    echo "Owner GID: " . $stat['gid'] . "\n";
}

echo "\nCurrent process:\n";
echo "Process UID: " . getmyuid() . "\n";
echo "Process GID: " . getmygid() . "\n";
echo "Process user: " . get_current_user() . "\n";
