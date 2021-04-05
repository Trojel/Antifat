function switchTo(pageId)
{
    pageElems = {
        menu: document.querySelector("#menu"),
        tm: document.querySelector("#tm"),
        inSession: document.querySelector("#inSession")
    };

    Object.keys(pageElems).forEach(key => {
        if (key == pageId)
        {
            pageElems[key].style.display = "inline-block";
        }
        else
        {
            pageElems[key].style.display = "none";
        }
    });
}