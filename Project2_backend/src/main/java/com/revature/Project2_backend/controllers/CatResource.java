package com.revature.Project2_backend.controllers;

import com.revature.Project2_backend.model.Category;
import com.revature.Project2_backend.service.CatService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Cat")
@AllArgsConstructor
public class CatResource {
  private final CatService catService;

  @GetMapping("/getCats")
  public ResponseEntity<List<Category>> getCats(){
    List<Category> cats = catService.findAllCategory();
    return new ResponseEntity<>(cats, HttpStatus.OK);
  }
  @PostMapping("/addCat")
  public ResponseEntity<Category> addCat(@RequestBody Category cat){
    Category category = catService.addCat(cat);
    return new ResponseEntity<>(category, HttpStatus.CREATED);
  }
  @Transactional
  @DeleteMapping("/catId/{id}")
  public ResponseEntity<?> deleteCat(@PathVariable("id") long catId){
    catService.deleteCat(catId);
    return new ResponseEntity<>(HttpStatus.OK);
  }

}
