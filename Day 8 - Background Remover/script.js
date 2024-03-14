document.getElementById('imageUpload').addEventListener('change', async function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async function(event) {
        const img = new Image();
        img.src = event.target.result;

        img.onload = async function() {
            const formData = new FormData();
            formData.append('image_file', file);


            try {
                const response = await fetch('https://api.remove.bg/v1.0/removebg', {
                    method: 'POST',
                    headers: {
                        'X-Api-Key': 'no93MFBSAjNwH37vPKErBL9k' 
                    },
                    body: formData
                });

                if (!response.ok) {
                    throw new Error('Failed to remove background');
                }

                const result = await response.blob();
                const imageUrl = URL.createObjectURL(result);

                document.getElementById('originalImage').src = img.src;
                document.getElementById('outputImage').src = imageUrl;

                // Show download button
                const downloadLink = document.getElementById('downloadLink');
                downloadLink.style.display = 'block';
                downloadLink.href = imageUrl;
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    reader.readAsDataURL(file);
});
