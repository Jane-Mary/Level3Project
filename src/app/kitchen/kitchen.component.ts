import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button'
import { ActivatedRoute } from '@angular/router';
import { design } from '../user';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent {
  kit: design[]= [
    {
      name: "Spacy",
      price: "150,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "In this spacious Palm Beach kitchen crafted by the award-winning design firm Pembrooke & Ives, gray cabinetry and millwork blends with the pops of white in the luxurious space.",
    },
    {
      name: "Minimal",
      price: "450,000frs",
      location: "Douala",
      image: "https://images.unsplash.com/photo-1582913130063-8318329a94a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Nothing radiates sophistication and class like a minimalist kitchen design. A minimalist design concept is sure to provide your kitchen a relaxing atmosphere because it is simple yet lovely. A kitchen in the Nordic design is ideal for this. Beige and cream cabinets that reach the ceiling can be used, as well as heavily painted cream walls.",
    },
    {
      name: "Woody",
      price: "200,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1604709178681-82325c04f8bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Wood is a classic addition to all gorgeous kitchens. Don't fail to appreciate the exotic appeal that quality wood furnishings may provide to your kitchen. Always choose a two-tone kitchen with a white, beige, or cream colour scheme for the walls and dark-coloured (like black) cabinets. To complete the aesthetic, choose well-designed rosewood, oak, or teak wall cabinets. Your cooking area has an earthy, rustic feel due to the exposed wood.",
    },
    {
      name: "Ligten Up The Area",
      price: "100,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1617228069096-4638a7ffc906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      description: "Nothing can brighten your kitchen space more effectively than using natural light. This is especially true for kitchens exposed to intense sunlight all day. Select windows with glass panels that extend to the wall. This allows natural light to circulate all the time freely. Your kitchen will immediately take on a timeless colour. Consider painting your kitchen in a vibrant colour, such as white, yellow, or blue, to make the most of the natural light.",
    },
    {
      name: "Play With Shape",
      price: "80,000frs",
      location: "Yaounde",
      image: "https://images.unsplash.com/photo-1543503103-f94a0036ed9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Ave Home founder Lisa Rickert chose a bright white kitchen design scheme for her New Orleans home. Soft gray cabinetry, hardwood flooring, along with a black and brass Lacanche range, help to balance the look.",
    },
    {
      name: "Little Space",
      price: "120,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1588854337048-44569c79c614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      description: "Depending on the project, the kitchen lighting could be different. Small kitchens tend to have a lot of bright lighting. This kitchen has a more upscale appearance due to the conventional white and grey colour scheme. To quickly serve as a breakfast area, install a counter and a chair along the outer side of the kitchen",
    },
    {
      name: "Patterns",
      price: "70,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80",
      description: "You can experiment with various hues, designs, and textures. To create a sense of grandeur and originality, combine bright, bold colours with different textured tiles. Add statement pieces to the room, such as hanging lights and other ornamental accents that raise the luxury of the design.",
    },
    {
      name: "Airy",
      price: "100,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1590227344930-9e75284f8de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Beautiful grand kitchen, with a classy, light and airy feel. Each piece was designed and detailed for the functionality and needs of the family.",
    },
    {
      name: "Color",
      price: "350,000frs",
      location: "Bamenda",
      image: "https://images.unsplash.com/photo-1539922980492-38f6673af8dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "With cheerful blue and white cabinets and a white tile backsplash, this space exemplifies the timeless country colour scheme. With a few small wooden touches on the edging, this kitchen design looks pleasant overall",
    },
  ];
  
  
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private favourites: FavoritesService
  ) { }

  
  openDialog(val: any) {
    const item = val
    this.dialog.open(Kit, { data: item },);
    
  }
  addtofav(restaurant: any) {
    this.favourites.addtofav(restaurant)
    window.alert('Added to favourites')
   }
  
}

@Component({
  selector: 'kit',
  templateUrl: 'kit.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})

export class Kit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any ,
  ) { }

}




