# react-native-convenience
##Convenient components for android and ios

```bash
npm install --save react-native-convenience 
```

### TOAST 
```javascript
     TOAST('whatever you want here', 'short', "top")
     
     msg: anything you want
     duration: short || long
     position: top || bottom, default is center
```

### ListItems
 
```bash
    import {listStyles} from react-native-convenience
```
```javascript
       <ListItems key={key}
                           onPress={ () => this.anyFunction}
                           name={item.name}
                           short_description={item.short_description}
                           price={price}
                           image={{uri:item.image}} OR  image={require('./file')} 
                        />

```
#### PropsTypes
    
* onPress
* name
* short_description
* image
* price
* mainStyles // for backgroundColor
* imageStyles // width and height

#### picture example

![alt text](/assets/image.png)
