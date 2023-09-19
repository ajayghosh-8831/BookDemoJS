function addBook()
{
    bookName_val=bookName.value;
    author_val=author.value;
    imgurl_val=imgurl.value;
        book={bookName_val,author_val,imgurl_val}

        //console.log(book);
        if(bookName_val in localStorage)
        {
            alert("Book Already Exist")
        }
        else
        {
            localStorage.setItem(bookName_val,JSON.stringify(book))
            alert("Book Added Successfully !")
        }
    
}
function searchBook()
{
    searchbookName_val=searchbookName.value
    if(searchbookName_val in localStorage)
    {   const errormsg=document.getElementById('error');
     errormsg.innerHTML=""
         const maindiv = document.createElement('div')
        bookObj=JSON.parse(localStorage.getItem(searchbookName_val))
       // alert(bookObj.imgurl_val)
        const divname = document.createElement('div')
        divname.className="col-lg-4 col-md-4 col-sm-6 bg-warning text-white border";
        divname.innerHTML=bookObj.bookName_val
        bookDetails.appendChild(divname);
        const divauth = document.createElement('div')
        divauth.className="col-lg-4 col-md-4 col-sm-6 bg-warning text-white border";
        divauth.innerHTML=bookObj.author_val
        bookDetails.appendChild(divauth);
        const divimage = document.createElement('div')
        divimage.className="col-lg-4 col-md-4 col-sm-6 bg-warning text-white border";
        const imageval = document.createElement('img')
        imageval.src=bookObj.imgurl_val;
        divimage.appendChild(imageval);
        bookDetails.appendChild(divimage);
    }
    
    else
    {
        const errormsg=document.createElement('h1');
        errormsg.id="error"
        errormsg.className="bg-danger"
        errormsg.innerHTML="Book Doesn't exist"
        bookDetails.appendChild(errormsg);
    }
}
function Gotosearch()
{
    window.location="./search.html"
}
