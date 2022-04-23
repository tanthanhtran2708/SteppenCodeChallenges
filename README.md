# Steppen Code Challenges

Our code challenges for developers considering joining the team, so we understand better where you are in skill level.

## Overal solutions & Comments

| Problems                | Checklist |
|-------------------------|-----------|
| average-order-value     | ✅         |
| good-binary-strings     | ✅         |
| item-list-with-features | ✅         |
| movie-titles-list       | ✅         |
| top-customers           | ✅         |
| transform-object        | ✅         |
| two-pane-list           | ✅         |
| verify-input-value      | ✅         |

### 1. GOOD BINARY STRINGS
**How to run** </br>
Run command
```
node solution.js
```
**Comments** The idea is related to this post https://www.tutorialspoint.com/special-binary-string-in-cplusplus. I have read the solution and figured out how to make it with Javascript. Because we're recursively creating the combination of our binaryString, then this solution will take bigger time complexity when we deal with ones having large values.

### 2. AVERAGE ORDER VALUE
I ran the test data and solution on https://sqliteonline.com/. Here is the result

![average-order-value](https://user-images.githubusercontent.com/39640365/164884465-078e11d4-2ec1-4576-a147-00a0feabf579.png)

### 3. TOP CUSTOMERS
I ran the test data and solution on https://sqliteonline.com/. Here is the result

![top-customers](https://user-images.githubusercontent.com/39640365/164884472-0d0d17fb-a2e9-4f30-9bcd-08f42d39a097.png)

### 4. MOVIES TITLE LIST
I successfully fetched the data from the given URL.
However, there's some problem with the `expectedOutput` having the unused spaces that could not match with my actual output even the order is correct.

![movie-titles-list](https://user-images.githubusercontent.com/39640365/164884527-2f52dff4-6008-4840-a457-8a105824be0f.png)

### 5. ITEM LIST WITH FEATURES

**Comments** I added the `font-awesome` icon and change a little bit from the first expected design by moving the text field to the top.

| Requirements                                                                                                               | Checklist |
|----------------------------------------------------------------------------------------------------------------------------|-----------|
| Start the list empty.                                                     | ✅         |
| The last item in the list is a text field where you can enter free text.                                      | ✅         |
| When the text field is submitted (either with a button or by pressing enter), the text in the field is added to the list as a new item.                                                       | ✅         |
| Display each of the items as a separate paragraph when added. | ✅         |
| When you hover over a list item, two buttons appear to the left of it - a delete button and an edit button.                                         | ✅         |
| Pressing the delete button asks for confirmation and then removes the item from the list.      | ✅         |
| Pressing the edit button turns the list item back into a text field, and when that field is submitted (either with a button or by pressing enter) it updates the list item                                                                                | ✅         |
| -                                                                                                                      | -        |

https://user-images.githubusercontent.com/39640365/164885750-a834cce5-cdf3-4f3d-bff4-0b441eefe1f9.mov

https://user-images.githubusercontent.com/39640365/164885754-741ac7f5-d752-4318-bf1e-bc24709b8d83.mov

### 6. TRANSFORM OBJECT

![transform-object](https://user-images.githubusercontent.com/39640365/164885233-9b8cb36d-e7ec-482c-9ec9-0936aa63524e.png)

### 7. TWO PANE LIST

| Requirements                                                                                                                         | Checklist |
|--------------------------------------------------------------------------------------------------------------------------------------|-----------|
| The left pane contains a list of all the titles.                                                                                     | ✅         |
| When a title is clicked on, it displays the content in the right-hand pane, with each string in the content as a separate paragraph. | ✅         |
| Before anything is clicked the right-hand pane should have an empty state which tells people to click on a title.                    | ✅         |



https://user-images.githubusercontent.com/39640365/164885336-34fdaf40-23e9-47f4-b17d-dfd79939ecb6.mov


### 8. VERIFY INPUT VALUE

![verify-input-value](https://user-images.githubusercontent.com/39640365/164885327-ffea7ee0-8113-4e6a-a7be-f78760700311.png)


## Overall Guidelines

- These tasks aim to give us an indication of what you can and can’t do.
- Please make your code as clean as you can, because otherwise we’re going to assume that you’re always messy. When working we don’t always have time to write clean code, and this is often fine, but in this process we need to know what “clean code” means to you.
- Comments aren’t required, good code should mostly be self-documenting in its variable and function names. But feel free to comment anywhere where you have something to communicate to us.
- Specifically, for more complex tasks, you might want to communicate:
    - Any assumptions you’ve made about the user or other context which affected your solution.
    - Your design/architectural approach.
    - Any considerations or tradeoffs that might be important to consider if this code was going to production.
- Be specific about the language/framework version your code is written for. Ideally this should be reasonably modern. For example, JavaScript should be ES6, using common modern features like async/await and arrow functions. However, if you’re not comfortable/experienced with a particular modern variant, use what you are comfortable with, and just specify that.
- It’s not necessary to write and submit tests for this code. However, if you’re more comfortable with test-driven development then feel free to do so.
- If the task has UI then please make that look good to the best of your ability. You’re not being hired as a designer, but in practice there are often times that developers have to tweak designs to improve them, so generally it’s good if you feel comfortable coming up with something.

## Way of Working

- Fork this repo on GitHub.
- Check the individual directories for each task you're doing for specific instructions.
- Once finished, point us to your fork and tell us which challenges you're submitting.

## Challenges

* [Verify Input Value - Basic JavaScript](https://github.com/SteppenApp/SteppenCodeChallenges/blob/main/verify-input-value)
* [Transform Object - Basic JavaScript](https://github.com/SteppenApp/SteppenCodeChallenges/blob/main/transform-object)
* [Movie Titles List - Basic JavaScript + API](https://github.com/SteppenApp/SteppenCodeChallenges/blob/main/movie-titles-list)
* [Average Order Value - Basic SQL](https://github.com/SteppenApp/SteppenCodeChallenges/blob/main/average-order-value)
* [Two-Pane List with Detail - Basic React](https://github.com/SteppenApp/SteppenCodeChallenges/blob/main/two-pane-list)
* [Top Customers - Intermediate SQL](https://github.com/SteppenApp/SteppenCodeChallenges/blob/main/top-customers)
* [Item List with Add, Edit, and Remove - Intermediate React](https://github.com/SteppenApp/SteppenCodeChallenges/blob/main/item-list-with-features)
* [Good Binary Strings - Intermediate Problem Solving](https://github.com/SteppenApp/SteppenCodeChallenges/blob/main/good-binary-strings)
