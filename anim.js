const text1 = document.querySelector(".text1");
const Str1 = text1.textContent;
 
const split1 = Str1.split(".");
text1.textContent="";
console.log(split1);
for(let i=0; i<split1.length;i++)
{
    text1.innerHTML+="<span data-aos=\"flip-up\" data-aos-duration=\"300\" data-aos-offset=\"-100\" data-aos-anchor-placement=\"top-center\">"+ split1[i]+".</span>";
}
const text2 = document.querySelector(".text2");
const Str2 = text2.textContent;
 
const split2 = Str2.split(".");
text2.textContent="";
console.log(split2);
for(let i=0; i<split2.length;i++)
{
    text2.innerHTML+="<span data-aos=\"flip-up\" data-aos-duration=\"300\"data-aos-offset=\"-100\" data-aos-anchor-placement=\"top-center\">"+ split2[i]+".</span>";

}
