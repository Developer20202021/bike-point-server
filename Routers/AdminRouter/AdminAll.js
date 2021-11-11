const express = require('express');
const mongoose  = require('mongoose');
const PlaceOrderModel = require('../../Modals/PlaceOrderModel');
const ProductModal = require('../../Modals/ProductModal');
const ReviewsModal = require('../../Modals/ReviewsModel');
const AdminAllRouter = express.Router();




AdminAllRouter.get('/reviews', async (req, res)=>{
    const getAllReviews = await ReviewsModal.find({});
    console.log(getAllReviews);
    if (getAllReviews.length>0) {
        res.status(200).json(getAllReviews )
    }
    else{
        res.status(400).json({msg:'No Results Found'})
    }

})


AdminAllRouter.get('/review/:id', async (req, res)=>{

    const {id} = req.params;




    const getAllReviews = await ReviewsModal.find({_id:id});
    console.log(getAllReviews);
    if (getAllReviews.length>0) {
        res.status(200).json(getAllReviews )
    }
    else{
        res.status(400).json({msg:'No Results Found'})
    }

})


AdminAllRouter.get('/all-orders', async (req, res)=>{

    const allOrders = await PlaceOrderModel.find({})
    if (allOrders.length>0) {
        res.status(200).json(allOrders)
        console.log(allOrders);
    }
    else{
        res.status(500).json({msg:"Server error"})
        console.log(allOrders);
    }

})

AdminAllRouter.delete("/delete-order/:id",async (req, res)=>{

    const {id}= req.params;
    const deleteOrder = await PlaceOrderModel.deleteOne({_id:id});
    if (deleteOrder) {
        res.status(200).json(deleteOrder)
        console.log(deleteOrder);
    }
    else{
        res.status(500).json({msg:"Server Error !!"});
        console.log(deleteOrder);
    }


})

AdminAllRouter.delete("/product-delete/:id",async (req, res)=>{

    const {id}= req.params;
    const deleteOrder = await ProductModal.deleteOne({_id:id});
    if (deleteOrder) {
        res.status(200).json(deleteOrder)
        console.log(deleteOrder);
    }
    else{
        res.status(500).json({msg:"Server Error !!"});
        console.log(deleteOrder);
    }


})






AdminAllRouter.put("/cancel-order/:id", async (req, res)=>{

    const {id} = req.params;
    console.log(id);
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









AdminAllRouter.get('/products', async (req, res)=>{

const getALlProducts = await ProductModal.find({});

if (getALlProducts.length>0) {
    
    res.status(200).json({productCount:getALlProducts.length, data:getALlProducts})


}
else{
    res.status(400).json({msg:'No Results Found'})
}


})





AdminAllRouter.get('/product/:id', async (req, res)=>{

    const {id} = req.params;
    const getAllProducts = await ProductModal.find({_id:id});

    if (getAllProducts.length>0) {
        res.status(200).json(getAllProducts);
    }
    else{
        res.status(400).json({msg:"No Results Found"});
    }

})




// @NextDay

const adminCheckMiddle = async (req, res, next)=>{

    const {oldAdminEmail} = req.query;
    const getAdmin = await AddUserModel.find({email:oldAdminEmail},{role:'admin'});
    if (getAdmin.length>0) {
        next()
    }
    else{
        res.status(400).json({msg:"Your are not allowed for add a new admin"})
    }


}



AdminAllRouter.put('/add-admin',adminCheckMiddle, async (req, res)=>{

    const {newAdminEmail} = req.query;

    const addNewAdmin = await AddUserModel.findOneAndUpdate({email:newAdminEmail}, {$set:{role:"admin"}});
    if (addNewAdmin.length>0) {
        res.status(200).json(addNewAdmin);
        console.log(addNewAdmin);
    }
    else{
        res.status(500).json({msg:"Server Error!!"});
        console.log(addNewAdmin);
    }




})






AdminAllRouter.get("/get-all-admin", async (req, res)=>{

    const admins = await AddUserModel.find({role:"admin"});
    if (admins.length>0) {
        res.status(200).json(admins);
        console.log(admins);
    }
    else{
        res.status(500).json({msg:"Server Error!!"});
        console.log(admins);
    }


})













module.exports = AdminAllRouter;