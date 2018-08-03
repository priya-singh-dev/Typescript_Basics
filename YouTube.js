// defining a class
var YouTube = /** @class */ (function () {
    function YouTube(title, hostingName, subcriber, likes, dislike, views, timeOfupload, youtube) {
        var _this = this;
        this.youtube = youtube;
        this.getYoutubeName = function () {
            return _this.title;
        };
        this.getNameOfHost = function () {
            return (_this.hostingName);
        };
        this.getviewVideoTitle = function () {
            return _this.VideoTitle;
        };
        this.hostingName = hostingName;
        this.title = title;
        this.subcriber = subcriber;
        this.likes = likes;
        this.dislike = dislike;
        this.views = views;
        this.time = timeOfupload;
        this.IconCountry = youtube._IconCountry;
        this.IconMessagesIndex = youtube._IconMessagesIndex;
        this.IconMessagesAvailable = youtube._IconMessagesAvailable;
        this.IconAccount = youtube._IconAccount;
        this.IconAccountPass = youtube._IconAccountPass;
        this.VideoURL = youtube._viewVideoURL;
        this.VideoURLAtCurrentTime = youtube.VideoURLAtCurrentTime;
        this.VideoCopyURLAtCurrentTime = youtube.VideoCopyURLAtCurrentTime;
        this.VideoStats = youtube.VideoStats;
        this.VideoArtist = youtube.VideoArtist;
        this.VideoLength = youtube.VideoLength;
        this.VideoCurrentTime = youtube.VideoCurrentTime;
        this.VideoAutoPlay = youtube.viewVideoAutoPlay;
        this.VideoSpeed = youtube.viewVideoSpeed;
        this.VideoSpeedOptionValues = youtube.viewVideoSpeedOptionValues;
        this.VideoScreenResolutionValues = youtube.viewVideoScreenResolutionValues;
        this.VideoDetailsViews = youtube.viewVideoDetailsViews;
        this.VideoDetailsSubsribers = youtube.viewVideoDetailsSubsribers;
        this.VideoDetailsPublcationDay = youtube.viewVideoDetailsPublcationDay;
        this.VideoDetailsDetails = youtube.VideoDetails;
        this.upNextAutoplay = youtube.upNextAutoplay;
        this.upNextVideoNumbers = youtube.upNextVideoNumbers;
        this.NextVideos = youtube.upNextVideos;
        this.NextVideoViews = youtube.upNextVideoViews;
        this.upNextMixVideos = youtube.upNextMixVideos;
        this.upNextMixVideosdetails = youtube.upNextMixVideosdetails;
        this.commentBoxCommentsEnable = youtube.commentBoxCommentsEnable;
        this.commentBoxCommentsNumber = youtube.commentBoxCommentsNumber;
        this.commentBoxCommentsUsernames = youtube.commentBoxCommentsUsernames;
        this.commentBoxCommentsContent = youtube.commentBoxCommentsContent;
    } // end constructor
    // country 
    YouTube.prototype.country = function () {
        console.log(this.IconCountry);
    };
    YouTube.prototype.setVideoTitle = function (newTitle) {
        this.VideoTitle = newTitle;
    };
    // video title
    YouTube.prototype.videotitle = function () {
        console.log("Typescript");
    };
    YouTube.videoURL = "https://www.youtube.com/watch?v=xqYD8QXJX9U";
    // videourl copy in a certain time
    YouTube.video_length = { hour: 0, min: 5, sec: 14 };
    return YouTube;
}()); // end 
var obj1 = new YouTube("Priya", "Typescript tutorial", 600, 6565, 5000, 6000, "5 month ago", {});
console.log("title of the video :" + " " + obj1.getYoutubeName());
console.log("Name of the host :" + " " + obj1.getNameOfHost());
obj1.videotitle();
