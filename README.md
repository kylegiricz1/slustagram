**Working Deployment: https://kylegiricz1.github.io/slustagram/
*Screenshots: https://sluedu-my.sharepoint.com/:w:/g/personal/kyle_giricz_slu_edu/EaKEU-5i4DZCsgSyQIweq00BbLt7RlJZWkn_YDIffnM3Tg?e=3gmXyu

SLUstagram is a social media-style app built with React. The main <Feed /> component displays a list of <PostCard /> components, each showing a post with likes and comments. Users can add new posts through the <Composer />. State is mainly kept in the feed for all posts, while individual components manage their own local state, like likes in <PostCard /> or input values in <Composer />. This setup keeps the app organized and makes data flow straightforward.
