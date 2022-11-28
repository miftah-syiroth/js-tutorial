function loadBlogs() {
  const ajax = new XMLHttpRequest();

  ajax.open("GET", "./src/data.json", true);
  ajax.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // 4 is request finished and response is ready
      // console.log(`${this.responseText}`); ini hanya akan mengembalikan string
      let blogs = JSON.parse(this.responseText); // ini diubah jadi json dulu
      console.log(blogs.length);

      //cek isi arraynya ada atau engga
      if (blogs.length > 0) {
        // ambil element ul, lalu masukkan item list
        let unlisted = document.getElementById("blogs-list");

        // buat element list
        blogs.forEach((blog, index) => {
          let list = document.createElement("li");
          list.className = "list-group-item";
          list.id = index;
          list.textContent = blog.title;

          unlisted.appendChild(list);
        });
      }
    }
  };

  ajax.send();
}

function storeBlog() {}

// aku klik button load blogs
document.querySelector("#load-blogs").addEventListener("click", loadBlogs);
