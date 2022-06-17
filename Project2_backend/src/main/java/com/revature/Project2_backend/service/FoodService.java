package com.revature.Project2_backend.service;

import com.revature.Project2_backend.customExceptions.FoodItemNotFoundException;
import com.revature.Project2_backend.model.FoodItems;
import com.revature.Project2_backend.repo.FoodRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {
  private final FoodRepo foodRepo;

  @Autowired
  public FoodService(FoodRepo foodRepo){
    this.foodRepo = foodRepo;
  }

  public FoodItems addFood(FoodItems food){
    return foodRepo.save(food);
  }

  public List<FoodItems> getFoodList(){
    return foodRepo.findAll();
  }

  public FoodItems findByFoodId(Long foodId){
    return foodRepo.findByfoodId(foodId).orElseThrow(() -> new FoodItemNotFoundException("The food for " + foodId + " is not found"));
  }

  public List<FoodItems> findByFoodCatId(Long categoryId){
    return foodRepo.findBycategoryId(categoryId)
      .orElseThrow(() -> new FoodItemNotFoundException("There is no food for the Category with the id of " + categoryId));
  }
  public void  deleteFoodById(Long foodId){
   foodRepo.deleteByfoodId(foodId);
  }

  public FoodItems updateFood(FoodItems food){
    return foodRepo.save(food);
  }
}
