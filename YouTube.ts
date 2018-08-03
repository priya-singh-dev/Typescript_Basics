// defining a class
class YouTube {

    hostingName : string;
    title : string;
    
    subcriber : number;
    likes : number;
    dislike : number;
    views : number;
    time : string;

    public IconCountry                   :string
    public IconMessagesIndex             :string
    public IconMessagesAvailable         :any
    public IconAccount                   :any
    public IconAccountPass               :any
    public VideoTitle                      :string
    public VideoURL                        :any
    public VideoURLAtCurrentTime           :any
    public VideoCopyURLAtCurrentTime       :any
    public VideoStats                      :any

    public VideoSpeedOptionValues          :any
    public VideoSubTitleAvailable          :any
    public VideoSubTitleSHowEnable         :any
    public VideoSubTitleStyleOptionsValues :any
    public VideoScreenResolutionValues     :any
    public VideoSubTitleLanguage           :any

    public VideoArtist                     :any
    public VideoLength                     :any
    public VideoCurrentTime                :any
    public VideoSpeed                      :any
    public VideoAutoPlay                   :any

     VideoDetailsViews               :any

     VideoDetailsSubsribers          :number
     VideoDetailsPublcationDay       :any
     VideoDetailsDetails             :any
     upNextAutoplay                  :any
     upNextVideoNumbers              :any
     NextVideos                      :any
     NextVideoViews                  :any

     commentBoxCommentsPublicationTime   :any
     commentBoxCommentsReplyPresent      :any
     commentBoxCommentsReplyNumbers      :any
     commentBoxCommentsReplies           :any

     
     protected upNextVideos                     :any
     protected upNextVideosdetails              :any
     protected commentBoxCommentsEnable            :boolean
     protected commentBoxCommentsNumber            :any
     protected commentBoxSortingMethod             :any
     protected commentBoxCommentsUsernames         :any
     protected commentBoxCommentsContent           :any

    constructor
    (
         title:string, 
         hostingName:string,
          subcriber: number, 
          likes:number,
           dislike: number,
            views:number, 
            timeOfupload:string,
        
        protected youtube:{
    
        _IconCountry?: string,
        

        _IconMessagesIndex?: any,
        
        _IconAccount?: string,

        _IconAccountPass?: string,
    

        // video options {
        _viewVideoURL?: string,
    
        VideoURLAtCurrentTime?: string,
        VideoCopyURLAtCurrentTime?: boolean,
    
        VideoCopyEmbedCode?: boolean,
    
        VideoLoop?: boolean,
    
    
        VideoStats?: boolean,
    
        // Video footerbar 
        VideoArtist?: string,
    
        VideoLength?: any,
    
        VideoCurrentTime?: any,
       
    
        // video setting 
    
        viewVideoAutoPlay?: boolean,
    
        viewVideoAnnotations?: boolean,
    
        // videospeed 
        viewVideoSpeed?: number,
    
        viewVideoSpeedOptionValues?: string[],
        
    
        viewVideoScreenResolutionValues?: any[],
    
        
       // video details area 
        viewVideoDetailsViews?: any,
    
    
        viewVideoDetailsSubsribers?: any,
    
        viewVideoDetailsPublcationDay?: any,
    
        VideoDetails?: string,
    
        // next video options 
        upNextAutoplay?: boolean,
    
        upNextVideoNumbers?: number,
    
        upNextVideos?: string[],
    
        upNextVideoViews?: string[],
    
        upNextMixVideos?: string[],
        
        upNextMixVideosdetails?: string[],
    
        // comment box 
        commentBoxCommentsEnable?: boolean,
    
        commentBoxCommentsNumber?: number,
    
    
        commentBoxCommentsUsernames?: string[],
    
        commentBoxCommentsContent?: string[],
    
    
    }) 
{
    this.hostingName = hostingName;
    this.title = title;

    this.subcriber = subcriber;
    this.likes = likes;
    this.dislike = dislike;
    this.views = views;
    this.time = timeOfupload;
    this.IconCountry =youtube._IconCountry;                                                                                                                         
        
    this.IconMessagesIndex =youtube._IconMessagesIndex;
        
    this.IconAccount =youtube._IconAccount;  
    
    this.IconAccountPass =youtube._IconAccountPass;
                                                                                                                         

    this.VideoURL = youtube._viewVideoURL;                                                                                                                    


    this.VideoURLAtCurrentTime  =youtube.VideoURLAtCurrentTime;                                                                                                                                 

    this.VideoCopyURLAtCurrentTime =youtube.VideoCopyURLAtCurrentTime;                                                                                                                                     


    this.VideoStats =youtube.VideoStats;                                                                                                                      
   

    this.VideoArtist =youtube.VideoArtist;                                                                                                                       

    this.VideoLength =youtube.VideoLength;                                                                                                                       

    this.VideoCurrentTime =youtube.VideoCurrentTime;                                                                                                                                                                                                                                                     

    

    this.VideoAutoPlay =youtube.viewVideoAutoPlay;                                                                                                                         
    
    this.VideoSpeed =youtube.viewVideoSpeed;                                                                                                                      

    this.VideoSpeedOptionValues =youtube.viewVideoSpeedOptionValues;                                                                                                                                  
    

    
    this.VideoScreenResolutionValues = youtube.viewVideoScreenResolutionValues;                                                                                                                                       

   
    this.VideoDetailsViews =youtube.viewVideoDetailsViews;                                                                                                                             
                                                                                                                               

    this.VideoDetailsSubsribers =youtube.viewVideoDetailsSubsribers ;                                                                                                                                  

    this.VideoDetailsPublcationDay =youtube.viewVideoDetailsPublcationDay ;                                                                                                                                     

    this.VideoDetailsDetails =youtube.VideoDetails;                                                                                                                               
    

    
    this.upNextAutoplay =youtube.upNextAutoplay ;                                                                                                                      

    this.upNextVideoNumbers =youtube.upNextVideoNumbers ;                                                                                                                          

    this.NextVideos =youtube.upNextVideos ;                                                                                                                         

    this.NextVideoViews =youtube.upNextVideoViews ;                                                                                                                        

    this.upNextVideos =youtube.upNextMixVideos;                                                                                                                       
    
    this.upNextVideosdetails =youtube.upNextMixVideosdetails;                                                                                                                              
    
    
    this.commentBoxCommentsEnable =youtube.commentBoxCommentsEnable ;                                                                                                                                

    this.commentBoxCommentsNumber =youtube.commentBoxCommentsNumber ;                                                                                                                                

    this.commentBoxCommentsUsernames = youtube.commentBoxCommentsUsernames ;                                                                                                                                   

    this.commentBoxCommentsContent = youtube.commentBoxCommentsContent ;                                                                                                                                 
                                                                                                                                        
}// end constructor

getYoutubeName = ()=>{
    return this.title;
}
getNameOfHost = ()=>{
    return(this.hostingName);
}
// country 
country():void{
    console.log(this.IconCountry)
}

static videoURL = `https://www.youtube.com/watch?v=xqYD8QXJX9U`

getviewVideoTitle =() => {
  return this.VideoTitle
}
setVideoTitle(newTitle:string){
   
 this.VideoTitle = newTitle
     
}

// video title
videotitle():void{
        console.log("Typescript")
}

} // end 


let obj1 = new YouTube("Priya","Typescript tutorial",600,6565,5000,6000,"5 month ago",{})

console.log("title of the video :" + " " + obj1.getYoutubeName());
console.log("Name of the host :" + " " + obj1.getNameOfHost());
obj1.videotitle()