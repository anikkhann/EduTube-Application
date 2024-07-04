
# EduTube Application

EduTube application has various educational videos and information about all those videos on its home page. At the time users could learn skills by sorting and viewing them and could create, update,and edit videos with information.
## Features

- Add New Video Page
- Display Added Video to Home Page
- Searching & Category sorting on Home page to see the Videos
- Dynamic Single Page Video along with it's Related Videos
- Update Dynamic Single Video
- Delete Dynamic Single Video

## Project Description
- When the user lands on the EduTube website, the user will be able to see all videos with some Tag Categories and a search field for sorting videos.
- If users want to see the videos according to their search or tag category selection, they will be able to see the filtered videos. Even if the user searches and selects the tag category at a time, the result will be shown according to seacrh and tag selection.
- Users can add any new video of their choice with information on this EduTube website. They will be able to see added video to Home Page.
- By selecting a specific video, the user will see the selected video dynamically on a single page along with the related videos of the selected video.
- By clicking the selected video or related video, the user gets two options, one is EDIT and the other is DELETE. When the user clicks on the update button, an edit page will appear with all the previous information of the selected video, from there the user can update the video with the new information. If the user wants to delete the selected video, by clicking on the delete button the user will be able to delete the selected video.
- After video adding, deleting, and editing a new video, the user will see all his updates on the homepage
## Tech Stack

- **Client:** React JS,TailwindCSS, Redux Js Toolkit, React Redux, React Toastify, React Router.
- **State Management:** RTK Query.
- **Server:** JSON Server


## Run Locally 

### Backend Server
Clone the project

```bash
  git clone git@github.com:anikkhann/EduTube-Application.git
```
Go to the server project directory

```bash
  cd EduTube-Application
  cd server
```

Install dependencies

```bash
  npm install
```
```bash
  npm start
```
- Keep running your JSON Server while running the Client Server

### Client Server
After cloning the website go to the project directory

```bash
  cd EduTube-Application
```

Install dependencies

```bash
  npm install
```

Start the client server

```bash
  npm start
```
#### After providing npm start, the project will be launched on your local PC http://localhost:3000/ 


