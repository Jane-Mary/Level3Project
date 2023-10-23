import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.scss']
})
export class BedComponent {
  bed = [
    {
      name: "Modern Boho",
      price: "150,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      description: "In the main bedroom of a TriBeCa apartment, the bed is by Meridiani, the vintage Poul Kjaerholm daybed retains its original leather, and the side table is by Wyeth; the console is a vintage piece by Paul McCobb, and the circa-1970 Beni Ourain rug is from Double Knot.",
    },
    {
      name: "Black And White",
      price: "450,000frs",
      location: "Douala",
      image: "https://images.unsplash.com/photo-1595526051245-4506e0005bd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "In a spacious TriBeCa bedroom, a statement black bed frame contrasts the white walls and bedding. Modern sconces and a BDDW lounge chair tie the space together.",
    },
    {
      name: "Tactful Textiles",
      price: "200,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1618220924273-338d82d6b886?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      description: "Take cues from this colorful Manhattan triplex bedroom and change up the bedding and upholstery for an instant touch of drama. Here, Peter Pennoyer and Katie Ridder mixed Holland & Sherry textiles with a vintage Japanese obi, rounding the space out with more traditional pieces like the antique Murano chandelier.",
    },
    {
      name: "Botanical",
      price: "100,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "There's botanical wallpaper, and then there's botanical wallpaper. This example from Lizzo in a Malibu home designed by Martha Mulholland is an impressionistic visual feast that will keep you close to nature, even if the view from your bedroom window is of a brick wall. The vintage pendants by Bruno Chiarini for Stilnovo hang down on either side.",
    },
    {
      name: "Simple",
      price: "80,000frs",
      location: "Yaounde",
      image: "https://images.unsplash.com/photo-1613977257441-dd57bd5aaf70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      description: "A Chelsea home's main bedroom relies on just a few statement pieces to reflect a serene and modern aesthetic. The custom walnut bed, matching dresser and side table give the minimalist space a modern feel with a breathe of fresh air",
    },
    {
      name: "Plain Features",
      price: "120,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1386&q=80",
      description: "Stark white walls are a crisp canvas for furniture and accessories in this modernist bedroom. A black Volante occasional table by Pierre Guariche is paired with a Pivotant wall light by Charlotte Perriand. A painting by Hans Hedenström hangs above a low wood headboard.",
    },
    {
      name: "Palatable Over Plush",
      price: "70,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1514&q=80",
      description: "In the primary bedroom of this Brooklyn apartment, designer Darren Jett threw the rulebook out the window. Rather than sticking to the standard plush headboard, he anchored the scene with a bespoke bedpost made of Antigua Verde marble, giving the room a unique panache that needs no soft edges or plush pillows to be sophisticated",
    },
    {
      name: "Rich, Colorful Accessories",
      price: "100,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1617104611622-d5f245d317f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1484&q=80",
      description: "This Montecito, California, bedroom by Kim Alexandriuk is gorgeously filled with gray textiles and accessorized with pops of rich color. Blue table lamps by Ryan Mennealy flank a bed covered in a George Spencer Designs velvet. A midcentury aluminum bench covered in a green jacquard by Lauren Hwang is placed at the foot of the bed, and the subtle and glamorous rug is by Jorge Pardo for Christopher Farr. A pendant by Philippe Anthonioz makes a statement in the center of the room.",
    },
    {
      name: "Subdued Scheme",
      price: "350,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Incorporating natural elements brings a sense of tranquility and warmth to a modern bedroom. Just ask Matthew Harris, who incorporated oak paneling into the primary bedroom of his Lisbon apartment, topping it off with an opulent Gubi pendant. Further enhance the outdoor-indoor connection by allowing natural light to flood the space through large windows or skylights.",
    },
  ];
  
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) { }

  
  openDialog(val: any) {
    const item = val
    this.dialog.open(Bed, { data: item },);
    
  }

  
}

@Component({
  selector: 'bedroom',
  templateUrl: 'bedroom.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})

export class Bed {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any ,
  ) { }

}
