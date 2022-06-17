package com.revature.Project2_backend.controllers;

import com.revature.Project2_backend.model.FoodItems;
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

  @GetMapping("/getFoods")
  public ResponseEntity<List<FoodItems>> getFood(){
    List<FoodItems> foods = foodService.getFoodList();
    return new ResponseEntity<>(foods, HttpStatus.OK);
  }

  @PostMapping("/AddFood")
  public ResponseEntity<FoodItems> addFood(@RequestBody FoodItems food){
    FoodItems foodAdded = foodService.addFood(food);
    return new ResponseEntity<>(foodAdded, HttpStatus.CREATED);
  }

  @GetMapping("/id/{foodId}")
  public ResponseEntity<FoodItems> getFoodById(@PathVariable("foodId") long foodId){
    FoodItems food = foodService.findByFoodId(foodId);
    return new ResponseEntity<>(food, HttpStatus.OK);
  }
  @Transactional
  @DeleteMapping("/id/{foodId}")
  public ResponseEntity deleteFoodById(@PathVariable("foodId") long foodId){
    foodService.deleteFoodById(foodId);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @GetMapping("/category/{categoryId}")
  public ResponseEntity<List<FoodItems>> getFoodsByCategory(@PathVariable("categoryId") long categoryId){
    List<FoodItems> foods = foodService.findByFoodCatId(categoryId);
    return new ResponseEntity<>(foods, HttpStatus.OK);
  }


}
