function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);
    for(var i=0;i<array_size;i++)
    {
        div_update(divs[i],div_sizes[i],"green");

    }

    enable_buttons();
}

function quick_partition(start,end)
{
    var i=start+1;
    var piv= div_sizes[start];
    div_update(divs[start],div_sizes[start],"yellow");
    for(var j=start+1;j<=end;j++)
    {
        if(div_sizes[j]<piv)
        {
            div_update(divs[j],div_sizes[j],"yellow");
            div_update(divs[i],div_sizes[i],"red");
            div_update(divs[j],div_sizes[j],"red");

            var temp=div_sizes[i];
            div_sizes[i]=div_sizes[j];
            div_sizes[j]=temp;


            div_update(divs[i],div_sizes[i],"red");  //  height update
            div_update(divs[j],div_sizes[j],"red");  //  height update


            div_update(divs[i],div_sizes[i],"cyan");  // color update
            div_update(divs[j],div_sizes[j],"cyan");   // color update
            
            i+=1;

        }
    }
    div_update(divs[start],div_sizes[start],"red");
    div_update(divs[i-1],div_sizes[i-1],"red");
    var temp=div_sizes[start];
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"red"); //height update
    div_update(divs[i-1],div_sizes[i-1],"green"); //height update

    // for(var t=start;t<=i;t++)
    // {
    //     div_update(divs[t],div_sizes[t],"green");

    // }
    
    

    return i-1;


}

function quick_sort(start,end)
{

    if(start<end)
    {
       var piv_pos= quick_partition(start,end);
       

       quick_sort(start,piv_pos-1);
       quick_sort(piv_pos+1,end);

    }
    
}
