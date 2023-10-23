import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss']
})
export class DiningComponent {
  din= [
    {
      name: "Round Table",
      price: "150,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1617098591651-dd95032bc8bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      description: "Encourage conversation with a round table. To keep things intimate, your table shouldn't exceed 40-inches in diameter. With multiple doorways, using a round table in this dining room helps open up space as well.",
    },
    {
      name: "Light",
      price: "450,000frs",
      location: "Douala",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      description: "If you want to highlight the view outside of your dining space, keep your furnishings and accessories minimal. This dining table is centered in front of a wall of floor-to-ceiling windows with simple curtains to soften and frame the space.",
    },
    {
      name: "Shapes",
      price: "200,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1633505412556-82c0921e8f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1529&q=80",
      description: "Create some rhythm in your space by repeating the shape of your table in the rug. This rectangular rug is large enough that all four legs of pulled-back chairs remain on the rug.",
    },
    {
      name: "Contemporary",
      price: "100,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      description: "Sleek, chic, and eye-catching is what contemporary dining room interiors are all about. Classic black and shades of grey, are a great colour choice for modern homes with tables and chairs just adding fun. You can incorporate an array of designs to your contemporary styled dining room. Have you considered rugs? The right rug will do wonders for your dining room. Colourful antiques and accented lighting can turn your dining room into a world full of art and style",
    },
    {
      name: "Cozy",
      price: "80,000frs",
      location: "Yaounde",
      image: "https://images.unsplash.com/photo-1616594266774-769089710d76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      description: "If you have a small dining space, consider creating a cosy dining nook. You can create a corner dining area with a built-in bench or add a small table to a window nook. Add some comfortable pillows and a cosy throw for a warm and inviting space",
    },
    {
      name: "Minimalism",
      price: "120,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1599327286062-40b0a7f2b305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "Minimalism doesn't mean boring! It's actually far from boring. A clean backdrop with sharp lines and edges make a minimalistic dining room the perfect place to enjoy a meal with your friends and family. Adorned with beautiful tables and chairs as a focal point for a room, minimalism spells simplicity and elegance. Minimalistic aesthetics works like a charm in a dining room as it creates a clean, clear canvas for tapestry. A pendant light hanging adds cosiness to the dining room. The trick is to be smart on how you use lights while decorating it. Black plays well with minimalism – modern black chairs are popular because they create mystery and blends well with a neutral white background. Mimic lines of your kitchen and cabinets with taller black chairs as it makes the room feel bigger and open.",
    },
    {
      name: "Art",
      price: "70,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1404&q=80",
      description: "Art can add personality and style to your dining room. Considercreating a statement wall with a gallery of art or a large painting. You can also create a DIY art project with your family and friends.",
    },
    {
      name: "Laid Back",
      price: "100,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Choose a lantern fixture for a more casual look. A standard chandelier would overwhelm this laid-back space, but a wrought-iron lantern fixture is just right.",
    },
    {
      name: "Simple",
      price: "350,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "A small art piece or a tiny pattern on the window can make a massive difference to brighten up space. A simple dining room can be inviting, welcoming and cosy. Light tables and chairs that aren’t bulky are ideal for simple dining room interiors. Make sure your walls are brightly coloured as it creates an illusion of a big space. Just add lovely framed artwork combined with a simple dining table and white chairs for a clean look. Add a wood top table with industrial lamps above for a dash of old-world charm. Integrate sleek lighting options like lanterns, cascading bulbs or pendant lights to create the perfect vibe.",
    },
  ];
  
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) { }

  
  openDialog(val: any) {
    const item = val
    this.dialog.open(Din, { data: item },);
    
  }

  
}

@Component({
  selector: 'din',
  templateUrl: 'din.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})

export class Din {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any ,
  ) { }

}
  

