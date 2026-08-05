---
title: Solving the recursive Json data generation in Java Spring
date: "2015-06-03T14:15:22"
modified: "2015-06-03T14:45:12"
author: osify
categories:
  - Java
tags:
  - Database
  - Database Mapping
  - Entity Relationship
  - Hibernate
  - Jackson
  - Java
  - Spring
  - Tips
lang: en
excerpt: Let me presume a quick remark or note on the use of jsonManagedReference, jsonBackReference or JsonIdentityInfo annotation when you will manage to display json data from the entity while working on Spring 3 and Jackson.…
origin:
  site: ask
  id: 700
  url: https://ask.osify.com/qa/700
  host: ask.osify.com
legacyUrls:
  - https://ask.osify.com/qa/700
mergedFrom: []
mediaCount: 0
featured: false
draft: false
---

Let me presume a quick remark or note on the use of jsonManagedReference, jsonBackReference or JsonIdentityInfo annotation when you will manage to display json data from the entity while working on Spring 3 and Jackson.

The work likely in case you need to exchange the data via Json such as developing application with AngularJS and Spring, you might face most of the issue the recursive Json data generated from child entity to parent entity vice versa.

To solve the issue, *jsonManagedReference*, *jsonBackReference* or *JsonIdentityInfo help.*

#### Relationship: OneToMany or ManyToOne

Use jsonManagedReference, jsonBackReference while:

- Place @jsonManagedReference annotation to parent entity in order to display the list of child entity.
- Place @jsonBackReference annotation to child entity on the attribute of User in order to prevent the loop display of parent entity.

**Example:** User to display its user roles

**User.java**

```java
@Entity
public class User implements java.io.Serializable {

 @Id
 @GeneratedValue(strategy=GenerationType.IDENTITY)
 private long id;

 @Column(name="name")
 private String name;

 @ManyToMany
 @JoinTable(name="users_roles",joinColumns=@JoinColumn(name = "user_fk"),
 inverseJoinColumns=@JoinColumn(name = "role_fk"))
 @JsonManagedReference
 private Set<Role> roles = new HashSet<Role>();

...
```

**Roles.java**

```java
@Entity
public class Role implements java.io.Serializable {

 @Id
 @GeneratedValue(strategy=GenerationType.IDENTITY)
 private int id;

 @ManyToMany(mappedBy="roles")
 @JsonBackReference
 private Set<User> users = new HashSet<User>();

...
```

#### Relationship: ManyToMany

- Use @JsonIdentityInfo on both parent and child entity
- We call this relationship as Bidirectional relationship

**Example**: User buys some items and the item needs to know who bought it

**User.java**

```java
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class User { ... }
```

**Item.java**

```java
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Item { ... }
```

#### Related Posts

Following posts are really helpful around all the explain of above short remark for you to discover more:

- <http://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion>
- <http://keenformatics.blogspot.com/2013/08/how-to-solve-json-infinite-recursion.html>
- <http://stackoverflow.com/questions/28179369/spring-rest-json-can-not-handle-managed-back-reference-defaultreference-415>
- <http://stackoverflow.com/questions/13630096/cyclic-references-in-a-bidirectional-many-to-many-relationship>
