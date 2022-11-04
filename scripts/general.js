function ourUsername ()
{
    return "contact";
}

function ourDomain ()
{
    return "megginson" + "." + "com";
}

function ourAddress ()
{
    return ourUsername() + "@" + ourDomain();
}

function mailProtocol ()
{
    return "mai" + "lt" + "o:";
}

function ourMailLink ()
{
    return mailProtocol() + ourAddress();
}

function doMailLink (node)
{
   node.href = ourMailLink();
}