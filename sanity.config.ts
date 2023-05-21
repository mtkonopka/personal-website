import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas/";


export default defineConfig({
    name: 'default',
    title: 'My Personal Website',
  
    projectId: '42y6b2zm',
    dataset: 'production',

    apiVersion: '2023-05-20',
    basePath: '/admin',
  
    plugins: [deskTool()],
    schema: {types: schemas}
    
   
 
  })