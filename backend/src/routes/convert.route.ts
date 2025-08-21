import { Router } from 'express';
import DocumentController from '../controllers/document.controller';
import ImageController from '../controllers/image.controller';
import VideoController from '../controllers/video.controller';
import AudioController from '../controllers/audio.controller';
import UtilController from '../controllers/util.controller';

const router = Router();

// Document conversion routes
router.post('/convert/document', DocumentController.convert);

// Image conversion routes
router.post('/convert/image', ImageController.convert);

// Video conversion routes
router.post('/convert/video', VideoController.convert);

// Audio conversion routes
router.post('/convert/audio', AudioController.convert);

// Text case conversion route
router.post('/convert/text-case', UtilController.convertTextCase);

// File size conversion route
router.post('/convert/file-size', UtilController.convertFileSize);

export default router;