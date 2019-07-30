import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title:String
  price:String
  description:String
  imageUrl:String
  editTitle:String
  editPrice:String
  editDescription:String
  editImageUrl:String
  productList:any
  productId:String
  updateProductId:String
  deleteId:String
  showProduct:boolean = false
  constructor(private cs:CommonService) { }
  addProduct(){
    let productInfo:any = {};
    productInfo.title = this.title;
    productInfo.price = this.price;
    productInfo.description = this.description;
    productInfo.imageUrl = this.imageUrl;
    this.cs.addProductService(productInfo)
      .subscribe((response)=>{
        console.log(response)
      },(err)=>{
        console.log(err);
      })
  }
  getAllProducts(){
    this.cs.getAllProductsService()
      .subscribe((response)=>{
         this.productList = response
      },(err)=>{
        console.log(err);
      })
  }
  getProduct(){
    this.cs.getProductService(this.productId)
      .subscribe((response)=>{
        this.productList = response
      },(err)=>{
        console.log(err);
      })
  }
  getEditProduct(){
    this.cs.getProductService(this.updateProductId)
      .subscribe((response)=>{
        this.editTitle = response[0].title;
        this.editPrice = response[0].price;
        this.editDescription = response[0].description;
        this.editImageUrl = response[0].imageUrl;
        this.showProduct = true;
      },(err)=>{
        console.log(err);
      })
  }
  updateProduct(){
    let productData = {
      title : this.editTitle,
      price : this.editPrice,
      description : this.editDescription,
      imageUrl : this.editImageUrl,
      id : this.updateProductId
    }
    this.cs.updateProductService(productData)
      .subscribe((response)=>{
        alert("Product updated successfully!!")
      },(err)=>{
        console.log(err);
      })
  }
  deleteProduct(){
    let data = {
      id : this.deleteId
    }
    this.cs.deleteProductService(data)
    .subscribe((response)=>{
      alert("Product deleted successfully!!")
    },(err)=>{
      console.log(err);
    })
  }
  ngOnInit() {
  }

}
