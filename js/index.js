var firebaseConfig = {
  apiKey: "AIzaSyDPtcML8DpxcNuxPmz7ESj359Zlz_aCNSM",
  authDomain: "thousandideastmot.firebaseapp.com",
  databaseURL: "https://thousandideastmot-default-rtdb.firebaseio.com",
  projectId: "thousandideastmot",
  storageBucket: "thousandideastmot.appspot.com",
  messagingSenderId: "418712733841",
  appId: "1:418712733841:web:1857013368f52e1d209730",
  measurementId: "G-73F576L2HL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*Log in*/

function login() {
  function newlogin(user) {
    if (user){
      app(user)
    }else{
      let provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
  }
  firebase.auth().onAuthStateChanged(newlogin)
}

function app(user) {
  document.getElementById('usernameindex').innerHTML = user.displayName
  document.getElementById('logouticon').innerHTML = ` <i class="fas fa-sign-out-alt nav-link--icon"></i>`

}
window.addEventListener('load', login)

function logout() {
  firebase.auth().signOut().then(() => {

  }).catch(() => {
    window.alert('Fail sign out.')
  })
}

/*
writeUserData = (hoten,mssv,khoa,gioitinh,lop,dienthoai,taikhoan,email,matkhau) => {
  firebase.database().ref('sinhvien/' + mssv).set({
    hoten: hoten,
    mssv: mssv,
    khoa: khoa,
    gioitinh: gioitinh,
    lop: lop,
    dienthoai: dienthoai,
    taikhoan: taikhoan,
    email: email,
    matkhau: matkhau

  })
}
document.getElementById('dangkyform').addEventListener('submit',(e)=>{
  var hoten = document.getElementById('hoten').value
  var mssv = document.getElementById('mssv').value
  var khoa = document.getElementById('khoa').value
  var gioitinh = document.getElementById('gioitinh').value
  var lop = document.getElementById('lop').value
  var dienthoai = document.getElementById('dienthoai').value
  var taikhoan = document.getElementById('taikhoan').value
  var email = document.getElementById('email').value
  var matkhau = document.getElementById('matkhau').value
  e.preventDefault()
  writeUserData(hoten,mssv,khoa,gioitinh,lop,dienthoai,taikhoan,email,matkhau)

  setTimeout(()=>{
    setTimeout(() => {
      alert('Đăng ký thành công! Vui lòng đăng nhập để tiếp tục');
      form.reset()
    }, 1000);
    window.location.assign('login.html')
  },2000)

})

function login() {
  var mssv = document.getElementById('mssv').value
  var matkhau = document.getElementById('matkhau').value
  firebase.database().ref('sinhvien/'+mssv).once('value').then(function (snapshot) {

    if (snapshot.val() === null) {
      window.alert('Không tìm thấy tài khoản! Vui lòng đăng ký!')
    }else{
      if (snapshot.val().mssv === mssv){
        if (snapshot.val().matkhau === matkhau){
          window.location.assign('index.html')
          document.getElementById('usernameindex').value = snapshot.val().hoten

        }else{
          window.alert('Sai mật khẩu! ')
        }
      }else{
        window.alert('Không tìm thấy tài khoản! Vui lòng đăng ký!')
      }
    }
  })
}

*/
/* TẠO REPONSIVE MOBILE CHO PAGE INDEAS-TOP */
$(document).ready(function() {
  $('.table-responsive-stack').each(function (i) {
     var id = $(this).attr('id');
     //alert(id);
     $(this).find("th").each(function(i) {
        $('#'+id + ' td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">'+ $(this).text() + ':</span> ');
        $('.table-responsive-stack-thead').hide();
     });
  });
  $( '.table-responsive-stack' ).each(function() {
    var thCount = $(this).find("th").length; 
    var rowGrow = 100 / thCount + '%';
    //console.log(rowGrow);
    $(this).find("th, td").css('flex-basis', rowGrow);   
  });
function flexTable(){
  if ($(window).width() < 768) {
     
  $(".table-responsive-stack").each(function (i) {
     $(this).find(".table-responsive-stack-thead").show();
     $(this).find('thead').hide();
  });
  // window is less than 768px   
  } else {
  $(".table-responsive-stack").each(function (i) {
     $(this).find(".table-responsive-stack-thead").hide();
     $(this).find('thead').show();
  });
  }
// flextable   
}      
flexTable();
window.onresize = function(event) {
   flexTable();
};

// document ready  
});


