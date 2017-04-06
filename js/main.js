function wow(value) {
    switch (value) {
        case "tl":
            document.getElementById("flexAlign").setAttribute("class", "container top-left");
            break;
        case "tc":
            document.getElementById("flexAlign").setAttribute("class", "container top-center");
            break;
        case "tr":
            document.getElementById("flexAlign").setAttribute("class", "container top-right");
            break;

        case "cl":
            document.getElementById("flexAlign").setAttribute("class", "container center-left");
            break;

        case "cc":
            document.getElementById("flexAlign").setAttribute("class", "container center-center");
            break;

        case "cr":
            document.getElementById("flexAlign").setAttribute("class", "container center-right");
            break;

        case "bl":
            document.getElementById("flexAlign").setAttribute("class", "container bottom-left");
            break;

        case "bc":
            document.getElementById("flexAlign").setAttribute("class", "container bottom-center");
            break;

        case "br":
            document.getElementById("flexAlign").setAttribute("class", "container bottom-right");
            break;

    }
}
