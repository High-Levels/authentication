# Feature Login

## Login feature

    Todo:

    1.  components/Navbar.jsx
    2.  auth/Login.jsx
        - hooks deklaration
        - buat dan pasam handleSubmit
        - import dan pasang Navbar
    3.  services/Auth.jsx
    4.  App.jsx
        import dan pasang path Login
    5.  components/Profile.jsx
    5.  pengujian pada browser:
        - http://localhost:5173/login

## Middleware route login

    Todo:

    1.  components/Navbar.jsx
        - import dan pasang hooks isLoggedIn pada button login, register dan logout
        - useEffect untuk mengechek jikasudah login apa belum
    2.  auth/Login.jsx
        - handle middleware ketika user sudah login, agar tidak bisa masuk kehalaman login,
          dan redirect kehalaman home.
    3.  component/Home.jsx
        - buat halaman home dengan bootstrap
    4.  App.jsx
        - import dan pasang Home
        - rubah route register

## Logout

    Todo:

    1.  components/Navbar.jsx
        - pasang handleLogout

## Profile Page

    Todo:

    1.  components/Profile.jsx
        - hooks profile
        - useEffect menampilkan data profile
        - pasang token yang login
    2.  components/Navbar.jsx
        - import  dan pasang useNavigate()
    3.  services/Auth.jsx
        - menyederhanakan data yang tanpil pada localstorage()

## Menampilkan picture pada page profile

    Todo:

    1.  components/Profile.jsx
        - pasang default enpoint
        - import dan pasang defaultImage
        - buat kondisi jika gambar ada dan tidak ada pda database
    2.  buat file pada assets/images/profile-default.jpg
