const express = require('express');
const mongoose  = require('mongoose');
const AddUserModel = require('../Modals/AddUserModel');
const PlaceOrderModel = require('../Modals/PlaceOrderModel');
const ProductModal = require('../Modals/ProductModal');
const ReviewsModal = require('../Modals/ReviewsModel');
const SubscriberModel = require('../Modals/SubscriberModel');

const AddProductRouter = express.Router();



// const addProductIndex = async (req, res, next)=>{
//     const findProduct = await ProductModal.find({});
   

//     const productIndex = findProduct.length + 1;
//     req.body.id = productIndex;
//     next();
// }


AddProductRouter.post('/product', async (req,res)=>{
    console.log(req.body);
    const addProduct = await ProductModal(req.body);
    addProduct.save(err=>{
        if (err) {
            console.log(err); 
            res.status(500).json({msg:'Server side error!!!'})
        }
        else{
            console.log(addProduct);
            res.status(200).json({msg:'Successfully  your product is uploaded'})
        }
        
    })
    // console.log(addProduct);


})


AddProductRouter.post('/reviews', async (req, res)=>{

    console.log(req.body);

    const addReviews = await ReviewsModal(req.body);
    addReviews.save(err=>{
        if (err) {
            console.log(err);
            res.status(500).json({msg:'Server side error!!!'})
        }
        else{
            console.log(addReviews);
            res.status(200).json({msg:'Successfully  your review is uploaded'})
        }
    })



})



// get all public review for public 

AddProductRouter.get('/reviews', async (req, res)=>{


    const getAllReviews = await ReviewsModal.find({}).select({reviewerImageDeleteUrl:0});
    console.log(getAllReviews);
    if (getAllReviews.length>0) {
        res.status(200).json(getAllReviews )
    }
    else{
        res.status(400).json({msg:'No Results Found'})
    }

})


AddProductRouter.get('/products', async (req, res)=>{


    const getAllProducts = await ProductModal.find({}).select({productImageDeleteUrl:0});

  
   

    if (getAllProducts.length>0) {
        res.status(200).json(getAllProducts);
    }
    else{
        res.status(400).json({msg:"No Results Found"});
    }

})

AddProductRouter.get('/home/product', async (req, res)=>{

    const getAllProducts = await ProductModal.find({}).select({productImageDeleteUrl:0}).limit(10);

    if (getAllProducts.length>0) {
        res.status(200).json(getAllProducts);
    }
    else{
        res.status(400).json({msg:"No Results Found"});
    }



})



AddProductRouter.get('/product/:id', async (req, res)=>{

    const {id} = req.params;
    const getAllProducts = await ProductModal.find({_id:id}).select({productImageDeleteUrl:0});

    if (getAllProducts.length>0) {
        res.status(200).json(getAllProducts);
    }
    else{
        res.status(400).json({msg:"No Results Found"});
    }

})

// const placeOrderMiddle = async(req, res, next)=>{
//     const getOrders = await PlaceOrderModel.find({});
//     const index = getOrders.length;
//     req.body.id = index+1;
//     console.log(req.body);
//     next()
// }



AddProductRouter.post('/placeorder',async (req, res)=>{

    console.log(req.body);


   

    const clientPlaceorder = await PlaceOrderModel(req.body);
    clientPlaceorder.save(err=>{
        if (err) {
            console.log(err);
            res.status(500).json({msg:"Server Side Error"})
        }
        else{
            console.log(clientPlaceorder);
            res.status(200).json({msg:"Order is pending"})
        }
    })




})


AddProductRouter.get('/my-order', async (req, res)=>{

    const email = req.query.email;
    console.log(email);
    const myOrders = await PlaceOrderModel.find({email:email});
    console.log(myOrders);
    if (myOrders.length>0) {
        res.status(200).json(myOrders)
    }





})



AddProductRouter.post('/subscriber', async (req, res)=>{

    const subscriberEmail = await SubscriberModel(req.body);
    subscriberEmail.save(err=>{
        if (err) {
            console.log(err);
            res.status(400).json({msg:"Please Fill Up Form"})
        }
        else{
            res.status(200).json({msg:"Done"})
            console.log(subscriberEmail);
        }
    })

    console.log(req.body);

})

const deleteOrderCheckMiddle = async (req, res, next)=>{

    const {id, email} = req.query;

    const getEmail = await PlaceOrderModel.find({_id:id});
    // console.log(getEmail);
    if (getEmail.length>0 && getEmail[0].email===email) {
      
        next();
    }
    else{
        res.status(400).json({msg:"Not valid"});
    }




}


AddProductRouter.delete('/delete-order',deleteOrderCheckMiddle, async (req,res)=>{

    const {id,email} = req.query;

    const deleteOrder = await  PlaceOrderModel.deleteOne({_id:id});
    if (deleteOrder) {
        res.status(200).json(deleteOrder);
        console.log(deleteOrder);
    }
    else{
        res.status(500).json({msg:"Server Error"});
        console.log(deleteOrder);
    }





})


AddProductRouter.put("/cancel-order", async (req, res)=>{

    const {id, email} = req.query;
    console.log(id, email);
    console.log(req.body);
    const cancelOrder = await PlaceOrderModel.findOneAndUpdate({_id:id},{$set:{status:req.body.status}}) ;
    if (cancelOrder) {
        res.status(200).json(cancelOrder);
        console.log(cancelOrder);
    }
    else{
        res.status(500).json({msg:"Server Error!!"});
        console.log(cancelOrder); 
    }
    





})




// Track your Order 

AddProductRouter.get("/tract-order/:id", async (req, res)=>{

    const {id} = req.params;
    console.log(id);

    const getOrderStatus = await PlaceOrderModel.find({_id:id});
    if (getOrderStatus.length>0) {
        res.status(200).json(getOrderStatus);
        console.log(getOrderStatus);
    }
    else{
        res.status(500).json({msg:"Server Error!!"});
        console.log(getOrderStatus); 
    }



})








// @NextDay

// const addNewUserIndexMiddle = async (req, res, next)=>{

//     const getAllUserIndex = await AddUserModel.find({});
//     const newUserIndex =  getAllUserIndex.length;
//      req.body.id = newUserIndex + 1;
//      console.log(req.body);
//      next()
 
        
    


// }

AddProductRouter.post("/new-user", async (req, res)=>{


    const addUser = await AddUserModel(req.body);
        addUser.save(err=>{
            if (err) {
                res.status(500).json({msg:"Server Error!!"});
           
            }
            else{
                res.status(200).json(addUser);
                    console.log(addUser);
            }
        })
    




})

AddProductRouter.get("/users", async (req, res)=>{
    const {email} = req.query;


    const User = await AddUserModel.find({email:email});
    if (User.length>0) {
        res.status(200).json(User);
        console.log(User);
    }
    else{
        res.status(500).json({msg:"Server Error!!"});
       
    }
    

})



// check he or she user or not 

const userCheckMiddle = async (req, res, next)=>{

    const {email}= req.body;

    const CheckUser = await AddUserModel.find({email:email});

    if (CheckUser.length>0) {

        res.status(200).json({msg:"user already taken"})
        console.log(CheckUser);
        


    }
    else{
        next();
    }




}



AddProductRouter.post("/add-google-new-user",userCheckMiddle, async (req,res)=>{


    console.log(req.body);

    const addUser = await AddUserModel(req.body);
        addUser.save(err=>{
            if (err) {
                res.status(500).json({msg:"Server Error!!"});
               
            }
            else{
                res.status(200).json(addUser);
                    console.log(addUser);
            }
        })


})













module.exports = AddProductRouter;