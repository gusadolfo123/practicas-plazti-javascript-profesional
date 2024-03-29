function MediaPlayer(config) {
	this.media = config.el;
	this.plugins = config.plugins || [];

	this._initPlugins();
}

// se puede usar los get and set para no pasar todo el this,
// sino solo una parte

MediaPlayer.prototype._initPlugins = function() {
	const player = {
		play: () => this.play(),
		pause: () => this.pause(),
		media: this.media,
		get muted() {
			return this.media.muted;
		},
		set muted(value) {
			this.media.muted = value;
		},
	};
	this.plugins.forEach(plugin => {
		plugin.run(player);
	});
};

MediaPlayer.prototype.play = function() {
	this.media.play();
};

MediaPlayer.prototype.pause = function() {
	this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
	if (this.media.paused) this.play();
	else this.pause();
};

MediaPlayer.prototype.mute = function() {
	this.media.muted = true;
};

MediaPlayer.prototype.unmute = function() {
	this.media.muted = false;
};

MediaPlayer.prototype.toggleSound = function() {
	if (this.media.muted) this.media.muted = false;
	else this.media.muted = true;
};

export default MediaPlayer;
