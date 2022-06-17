package com.revature.Project2_backend.service;

import com.revature.Project2_backend.model.Category;
import com.revature.Project2_backend.repo.CatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatService {
  private final CatRepo catRepo;

  @Autowired
  public CatService(CatRepo catRepo){
    this.catRepo = catRepo;
  }
  public Category addCat(Category cat){
    return catRepo.save(cat);
  }

  public List<Category> findAllCategory(){
    return catRepo.findAll();
  }

  public void deleteCat(Long catId){catRepo.deleteBycatId(catId);}
}
