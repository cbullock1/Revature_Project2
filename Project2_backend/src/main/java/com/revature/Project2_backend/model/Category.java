package com.revature.Project2_backend.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "category")
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false, name = "catId")
    private long catId;
    @Column(unique = true)
    private String catName;

    public Category() {
    }

    public long getCatId() {
        return catId;
    }

    public void setCatId(long catId) {
        this.catId = catId;
    }

    public String getCatName() {
        return catName;
    }

    public void setCatName(String catName) {
        this.catName = catName;
    }
}
