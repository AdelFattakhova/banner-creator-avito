import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

export function exportPNG() {
    htmlToImage.toPng(document.getElementById('banner'))
        .then(function (dataUrl) {
            download(dataUrl, 'preview.png');
        });
}

