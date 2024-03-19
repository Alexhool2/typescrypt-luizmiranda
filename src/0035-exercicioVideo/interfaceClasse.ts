interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocols {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocols {
  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = "pause";
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = "play";
    }
  }
  stop(): void {
    //
  }
  iniciarEventos(): void {
    this.playButton.addEventListener("click", () => {
      this.playToggle();
      this.stopButton.addEventListener("click", () => {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = "play";
      });
    });
  }
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector(".video") as HTMLVideoElement,
  playButton: document.querySelector(".play") as HTMLButtonElement,
  stopButton: document.querySelector(".stop") as HTMLButtonElement,
});

videoPlayer.iniciarEventos();
