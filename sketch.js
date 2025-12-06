
// Layered bottom to top (image at the furthermost back is at the top of the list)

function preload() {
    floor = createImg("pexels-suzyhazelwood-2937884.jpg");
    bg = createImg("pexels-anna-guerrero.jpg");

  
    toros = createImg("toros.jpg");
    
    Marilyn = createImg("Marilyn.jpg");

    bandera = createImg("Gif_de_la_Bandera_de_Mexico_(1968_a_la_fecha).gif");


    pChino = createImg("Papel_Chino.png");
    pChino3 = createImg("Papel_Chino.png");
    pChino2 = createImg("Papel_Chino.png");

    Cowboys = createImg("LetsGoCowboys.gif");

    // background items
    
    tri = createImg("Blair-Cincinnati-RB-Camera.webp");
    calaca = createImg("calacachida.gif");
    catrina = createImg("Catrina.png");
    catrina1 = createImg("catrina1.png");
    Pumas = createImg("pumas.gif");

    //TABLE
    table = createImg("Table.png");
    mantel1 = createImg("mantel.jpg");
    
    
    
    // items on the table
    
    flor = createImg("Flor_1.avif");
    spinS = createImg("spinning-skull.gif");
    dulces = createImg("dulces.png");
    tony = createImg("FB_IMG_1760380455186.jpg");
    frame = createImg("Frame.png");
    candles = createImg("candles.gif");
    pepper = createImg("DrPepper.gif");
    cap = createImg("Tony Cap.png");
    spin = createImg("spin.gif");
    pan = createImg("pan_muerto.webp");
    camera = createImg("camerav.png");
    Homero = createImg("Homero.webp");
   


    Sball = createImg("SpursBall.webp");

ring = createImg("ring.gif");
    derek = createImg("Derek.png");
    
    bolt = createImg("Bolt.png");
     yncap = createImg("YNcap.webp");
     ballandbat = createImg("baseballandbat.gif");
     kia = createImg("Kia.png");
    rockin = createImg("rockingchair.gif");
    nombre = createImg("Tony.gif");
    dotd = createImg("dotd.gif");
}

function setup() {
    createCanvas(1500, 1500);


}

function draw() {
    background(220);

    bg.position(0,-400)
    bg.size(1500,1500);

    bolt.position(0,1000)
    bolt.size(400,400);

    pChino.position(0,-125)
    pChino3.position(900,-125)
    pChino2.position(450,-125)

    tony.position(600,550)
    tony.size(225,300);

    pepper.position(420,610)
    pepper.size(130,300);
    
    table.position(100,400)
    table.size(1300,1300);

    frame.position(500,510)
    frame.size(400,400);

    flor.position(200,675)
    flor.size(400,200);
 
    cap.position(1000,700)
    cap.size(250,250);

    catrina.position(400,150)
    catrina.size(900,900);

    candles.position(700,600)

    spin.position(150,820)
    spin.size(100,100);

    pan.position(500,750)
    pan.size(200,200);

    mantel1.position(300,800)
    mantel1.size(800,400);

    tri.position(800,300)
    tri.size(1000,1000);

    camera.position(280,790)
    camera.size(200,120);
    
    toros.position(40,200)
    toros.size(750,500);

    spinS.position(100,100)
    spinS.size(400,400);

    rockin.position(800,700)
    rockin.size(800,800);

    dulces.position(800,520)
    dulces.size(400,400);

    floor.position(0,1100)
    floor.size(1500,400);

    nombre.position(500,450)
    nombre.size(400,200);

    catrina1.position(-200,500)
    catrina1.size(700,700);

    yncap.position(160,990)
    yncap.size(150,150);

    Homero.position(240,720)
    Homero.size(100,200);

    bandera.position(1100,200)
    bandera.size(300,200);

    Marilyn.position(950,250)
    Marilyn.size(300,400);

    calaca.position(1100,120)
    calaca.size(280,280);

    Pumas.position(200,350)
    Pumas.size(500,500);

    Cowboys.position(500,300)
    Cowboys.size(300,300);

    Sball.position(260,1050)
    Sball.size(250,250);

    ballandbat.position(100,1350)
    ballandbat.size(300,150);

    dotd.position(520,1150)
    dotd.size(400,400);

    derek.position(-100,900)
    derek.size(400,400);

    ring.position(-30,770)
    ring.size(250,250);

    kia.position(700,930)
    kia.size(500,500);

}