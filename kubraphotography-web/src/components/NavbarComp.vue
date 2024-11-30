<script>

export default{

  methods:{
    GotoPage(page){
      this.$router.push({name:page});
    },
  },
}

</script>

<template>

 
    <!-- navbar start -->
    <nav id="backgrd" class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center ">
      <a class="navbar-brand" @click="GotoPage('HomePage')">ANA SAYFA</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" @click="GotoPage('AboutPage')">HAKKIMIZDA </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" @click="GotoPage('BlogPage')">BLOG</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              PORTFOLYO
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" @click="GotoPage('PregnantPage')">HAMİLE</a>
              <a class="dropdown-item" @click="GotoPage('NewbornPage')">YENİ DOĞAN</a>
              <a class="dropdown-item" @click="GotoPage('FamilyPage')">AİLE</a>
              <a class="dropdown-item" @click="GotoPage('BirthdayPage')">YAŞ</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              BİLGİ
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" @click="GotoPage('PackagesPage')">PAKETLERİMİZ</a>
              <a class="dropdown-item" @click="GotoPage('SssPage')">SIKÇA SORULAN SORULAR</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- navbar end -->
</template>

<style scoped>
#backgrd{
      /* height: 13vh; Yükseklik (sayfanın %60'ı) */
      /* height: 50px;
      background-image: url('../assets/img/ppp.jpg'); /* Resim yolu */
      /* background-size: cover; Resmi kapsayacak şekilde boyutlandırır */
      /* background-position: top; Resmi ortalar */
      /* background-repeat: no-repeat; Tekrar etmez */
      /* filter: brightness(90%); Parlaklığı %70'e düşürür */


  background-image:url(../assets/img/ppp.jpg);
  background-size: cover;
  opacity: 100;
  height: 100px;
  
  
}
</style>
