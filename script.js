.loader {
    margin: 0;
    overflow: hidden;
    font-family: 'Courier New', Courier, monospace;
    color: azure;
}

#loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0b0b0b; /* You can set the background color you prefer */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#name {
    display: block;
    opacity: 0; /* Initially set opacity to 0 */
    position: absolute;
    top: 37%;
    transform: translateY(-10%);
    transition: opacity 0.5s ease-in-out; /* Add a smooth opacity transition */
}

#loader {
    width: 0%;
    height: 7px; /* You can adjust the height of the loader */
    background: linear-gradient(to right, #c33764, #1d2671);
    border-radius: 15px;
}

@media (max-width: 768px) {
    
#loader {
    width: 0%;
    height: 7px; /* You can adjust the height of the loader */
    background: linear-gradient(to right, #c33764, #1d2671);
    border-radius: 15px;
    
}
}
