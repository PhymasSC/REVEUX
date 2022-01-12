# REVEUX
A web design assignment of subject CSF3206 in University of Malaysia Terengganu. This project is built with Node Js, Express Js, MongoDB, Tailwind and Stripe in MVC architecture.


## Prerequisites
- [NPM](https://nodejs.org/en/)

## Getting started
### Running the project locally
1. Download and install [git](https://git-scm.com/downloads) from the official website.
2. In the 'code' section of this repository, click the Code.

![enter image description here](https://user-images.githubusercontent.com/68804560/140695134-4baaeaf8-cc56-4aa2-ac90-ed849c5a7b4f.png)

3. Click the clipboard icon to copy the link of this repositories.

Or simply copy this 
```
$ https://github.com/PhymasSC/REVUEX.git
```


4. Open  Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
```
$ cd C:\your-working-directory
```

6. Type `git clone`, and then paste the URL you copied earlier.
```
$ git clone https://github.com/PhymasSC/REVUEX.git
```

7. Press **Enter** to create your local clone.

```
$ git clone https://github.com/PhymasSC/REVUEX.git
Cloning into 'REVUEX'...
remote: Enumerating objects: 16, done.
remote: Counting objects: 100% (16/16), done.
remote: Compressing objects: 100% (15/15), done.
remote: Total 16 (delta 0), reused 16 (delta 0), pack-reused 0
Receiving objects: 100% (16/16), 4.61 MiB | 2.12 MiB/s, done.
```

8. Open the cloned project in your IDE. Install the dependencies required.
```
$ npm i
```

9. Run the project.
```
$ npm run devStart
```

10. Create a `.env` file and fill your environment variables.
```
STRIPE_SECRET_KEY=
DB_URL=
AUTH_EMAIL_USER=
AUTH_EMAIL_PASS=
SESSION_SECRET=
```
REVEUX can be now accessed at http://localhost:5000/.

## Technologies
- Server is set up with [Node js](https://nodejs.org/en/) and [Express js](https://expressjs.com/).
- [Tailwind css](https://tailwindcss.com/) is used for styling.
- Payments are processed with [Stripe](https://stripe.com).
- [Swiper js](https://swiperjs.com/) is used for performing carousel.
- [Alpine js](https://alpinejs.dev/) is used for dropdown menu.
- [Express es6 template engine](https://github.com/dondido/express-es6-template-engine) is used as the template engine.
- [Atlas MongoDB](https://www.mongodb.com/atlas/database) is used as database.
- [Passport](https://www.passportjs.org/) is used for login authenticaiton.
- [Express-session](https://www.npmjs.com/package/express-session) is used for persistent login.