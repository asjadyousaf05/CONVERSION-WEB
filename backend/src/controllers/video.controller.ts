export class VideoController {
    async convertVideo(req, res) {
        try {
            const { inputFormat, outputFormat, file } = req.body;

            // Logic for video conversion using a service
            const videoService = new VideoService();
            const convertedFile = await videoService.convert(inputFormat, outputFormat, file);

            res.status(200).json({
                success: true,
                message: 'Video converted successfully',
                data: convertedFile,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Video conversion failed',
                error: error.message,
            });
        }
    }
}