import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import PhotoCard from "./PhotoCard.jsx";

const bsPhotos = [
    { id: 1, description: 'Selfie with Mom'}, 
    { id: 2, description: 'Photo of Breakfast'}, 
    { id: 3, description: 'Airplane wing in sky'}, 
    { id: 4, description: 'My nails painted'}, 
    { id: 5, description: 'French Bulldog puppy'}, 
    { id: 6, description: 'Wynwood wall graffiti'}, 
    { id: 7, description: 'Black and white Skyline'}, 
    { id: 8, description: 'My Legs at beach'}, 
    { id: 9, description: 'My Legs at pool'}, 
    { id: 10, description: 'Latte art with biscuit'}, 


]


function PhotoList() {
    return (
        <ScrollView style={styles.photoList}  >
                {bsPhotos.map(photo => (
                    <PhotoCard key={photo.id}  photo = {photo} />
                ) )}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    photoList: {
        flex: 1,
        backgroundColor: "e8e8e8",
    }
})
export default PhotoList;

