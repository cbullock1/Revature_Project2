package com.revature.Project2_backend.controllers;

import com.revature.Project2_backend.model.Category;
import com.revature.Project2_backend.model.FoodItems;
import com.revature.Project2_backend.service.CatService;
import com.revature.Project2_backend.service.FoodService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Food")
@AllArgsConstructor
public class FoodResource {

  private final FoodService foodService;
  private final CatService catService;
  private final String absolutePath = "/assets/foodImages/";

  @GetMapping("/getFoodList")
  public ResponseEntity<List<FoodItems>> getFood(){
    List<FoodItems> foods = foodService.getFoodList();
    return new ResponseEntity<>(foods, HttpStatus.OK);
  }

  @PostMapping("/addFood")
  public ResponseEntity<FoodItems> addFood(@RequestBody FoodItems food){
    Category cat = catService.findByCatId(food.getCategoryId());
    if(cat != null){
      String relativePath = cat.getCatName() + "/" + food.getName();
      food.setPicture(absolutePath + relativePath + ".jpg");
      return new ResponseEntity<>(foodService.addFood(food), HttpStatus.CREATED);
    }
    else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @GetMapping("/foodId/{foodId}")
  public ResponseEntity<FoodItems> getFoodById(@PathVariable("foodId") long foodId){
    FoodItems food = foodService.findByFoodId(foodId);
    return new ResponseEntity<>(food, HttpStatus.OK);
  }
  @Transactional
  @DeleteMapping("/foodId/{foodId}")
  public ResponseEntity<?> deleteFoodById(@PathVariable("foodId") long foodId){
    FoodItems findFood = foodService.findByFoodId(foodId);
    if(findFood != null){
      foodService.deleteFoodById(foodId);
      return new ResponseEntity<>(HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @GetMapping("/category/{categoryId}")
  public ResponseEntity<List<FoodItems>> getFoodsByCategory(@PathVariable("categoryId") long categoryId){
    List<FoodItems> foods = foodService.findByFoodCatId(categoryId);
    return new ResponseEntity<>(foods, HttpStatus.OK);
  }

  @PutMapping("/foodUpdate")
  public ResponseEntity<FoodItems> updateFood(@RequestBody FoodItems foodUpdate){
    FoodItems findFood = foodService.findByFoodId(foodUpdate.getFoodId());
    if(findFood != null){
      return new ResponseEntity<>(foodService.updateFood(foodUpdate), HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }


}
