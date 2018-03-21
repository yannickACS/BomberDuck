var div = document.getElementById('div');
 
document.addEventListener('keydown', function(e)
{
    if(e.keyCode == 37)
    {
        /* Pour la touche gauche */
        var i = div.offsetLeft;
        i--;
        div.style.left = i + 'px';
        div.textContent = div.style.left;
    }
    else if(e.keyCode == 39)
    {
        /* Pour la touche droite */
        var i = div.offsetLeft;
        i++;
        div.style.left = i + 'px';
    }
    else if(e.keyCode == 38)
    {
        /* Pour la touche haut */
        var i = div.offsetTop;
        i--;
        div.style.top = i + 'px';
        div.textContent = div.style.top;
    }
    else if(e.keyCode == 40)
    {
        /* Pour la touche bas */
        var i = div.offsetTop;
        i++;
        div.style.top = i + 'px';
    }
}, false);
