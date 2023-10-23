import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.scss']
})
export class LivingComponent {

  liv = [
    {
      name: "Shiny",
      price: "150,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "This neutral-toned living room by the designeris refined and grown-up, but also family-friendly. The soft and textural upholstery mixed with cream paint, rustic wood pieces, and plenty of antique accents are partially to thank, but there's also a large television mounted to the wall for family movie marathons. Fine gave it prime over-the-mantel placement but discretely tucked behind panels that double as modern art. ",
    },
    {
      name: "Dark Comfort",
      price: "450,000frs",
      location: "Douala",
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "This designs is for people that don't like bright colors and aim for a quiet cool room with dark tones.But it is still open for changes if the owner wants to shake it up a bit.",
    },
    {
      name: "Shadowed Light",
      price: "200,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGxpdmluZyUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description: "This Upper West Side apartment single-handedly proves that the dark side has plenty of perks. Designer Kevin Dumais created a space that's equal parts handsome and homey with a plethora of textures. The suede wallpaper by Holly Hunt, custom ottoman, and Daniel Wenger lounge chair give this space the tactile treatment.",
    },
    {
      name: "Create Zones With Area Rugs",
      price: "100,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "This sitting room is right off the open kitchen, so the designer decided to visually separate it with a custom sectional and area rug. A wide bench is positioned at a diagonal to the tv, establishing a nice balanced whole.",
    },
    {
      name: "Mix Clean Lines With Casual Materials",
      price: "80,000frs",
      location: "Yaounde",
      image: "https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "In the living room of the designer, a light shade of blue-gray along with clean-lined furniture makes for a polished backdrop while the woven chairs, light wood side table, and tree stump coffee table ensure a laidback atmosphere. It's the perfect balance of approachable and formal.",
    },
    {
      name: "Work Around Restrictions",
      price: "120,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      description: "When someone moved into this apartment, there was only one thing that prevented it from being the perfect fit: The building had a no wallpaper rule. To work around that obstacle, she applied a light shade of cream paint in a plaster-like finish that channels the texture of wallpaper.",
    },
    {
      name: "Balance Hard Materials With Soft Ones",
      price: "70,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
      description: "If your living room has hardwood floors or stone tile flooring and lots of glass surfaces like this one designed by Caroline Turner, soften it up with super plush seating and rich materials like velvet in jewel tones. A statement light also helps bring down the scale of the high ceilings.",
    },
    {
      name: "Deepen the Tones",
      price: "100,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Skip brighter hues for a living room that exudes a sultry and mysterious air. If you want a break from bright colors, this treasure of a space contains cream limewash walls, a terra-cotta velvet sofa, and eye-catching  accents.",
    },
    {
      name: "Add Unique Seating",
      price: "350,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1616137356540-b13b2a04a507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      description: "A multifunctional classic, a nap bench can make lounging in your living room look twice as chic. Here, the designer uses a bedlike piece by the window of the 2022 Whole Home without blocking the sculptural window. A cushion covered in a Sanderson fabric gives it a bespoke look.",
    }
  ]

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) { }

  
  openDialog(val: any) {
    const item = val
    this.dialog.open(Liv, { data: item },);
    
  }

}



@Component({
  selector: 'liv-h',
  templateUrl: 'liv.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})

export class Liv {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any ,
  ) { }

}



