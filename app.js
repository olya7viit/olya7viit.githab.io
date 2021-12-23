window.startModel = () => {
 const model = poseDetection.SupportedModels.BlazePose;
   const detectorConfig = {
     runtime: 'tfjs'
     modelType: 'full'
   };
   detector = await poseDetection.createDetector(model, detectorConfig);
   const video = document.getElementById('video');
   const poses = await detector.estimatePoses(video);
}