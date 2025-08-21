export class ImageController {
    constructor(private imageService: ImageService) {}

    async convertImage(req, res) {
        try {
            const { format, file } = req.body;
            const convertedFile = await this.imageService.convert(file, format);
            res.download(convertedFile);
        } catch (error) {
            res.status(500).json({ message: 'Error converting image', error });
        }
    }

    async uploadImage(req, res) {
        try {
            const file = req.file;
            if (!file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }
            res.status(200).json({ message: 'File uploaded successfully', file });
        } catch (error) {
            res.status(500).json({ message: 'Error uploading image', error });
        }
    }
}