
    let activefileuploaderId=""
    let theLawyerPronouns=[]
    let theCategory2=[]
    let theSubcategory2=[]
    let thecasefiles=[]
    let thecertificates=[]
    
    let allCategories={
      "categories": [
        {
          "name": "Business & Corporate Law",
          "subfields": [
            "Business Law",
            "Corporate Law",
            "Commercial Law",
            "Mergers & Acquisitions (M&A)",
            "Securities Law",
            "Franchise Law",
            "Startup Law",
            "Antitrust & Competition Law",
            "Private Equity & Venture Capital Law",
            "Banking & Finance Law",
            "Financial Regulation Law"
          ]
        },
        {
          "name": "Civil Litigation & Dispute Resolution",
          "subfields": [
            "Civil Litigation",
            "Class Action Lawsuits",
            "Alternative Dispute Resolution (ADR)",
            "Mediation",
            "Arbitration",
            "Commercial Litigation",
            "Defamation & Libel Law",
            "Civil Rights Litigation"
          ]
        },
        {
          "name": "Criminal Law",
          "subfields": [
            "Criminal Defense",
            "White Collar Crime",
            "Cybercrime Law",
            "Juvenile Law",
            "Traffic & DUI/DWI Law",
            "Expungement Law",
            "Organized Crime Law",
            "Death Penalty Defense",
            "Drug Crimes Defense"
          ]
        },
        {
          "name": "Employment & Labor Law",
          "subfields": [
            "Employment Law",
            "Labor Law",
            "Workers’ Compensation",
            "Wrongful Dismissal",
            "Workplace Discrimination & Harassment Law",
            "Occupational Health & Safety Law",
            "Employee Benefits Law",
            "Union & Collective Bargaining Law",
            "Executive Compensation Law"
          ]
        },
        {
          "name": "Family & Matrimonial Law",
          "subfields": [
            "Family Law",
            "Divorce Law",
            "Child Custody & Support",
            "Adoption Law",
            "Fertility & Surrogacy Law",
            "Domestic Violence & Protective Orders",
            "Prenuptial & Postnuptial Agreements",
            "Grandparents’ Rights Law"
          ]
        },
        {
          "name": "Estate Planning, Probate & Elder Law",
          "subfields": [
            "Estate Planning",
            "Wills & Trusts",
            "Probate Law",
            "Elder Law",
            "Guardianship & Conservatorship",
            "Special Needs Planning"
          ]
        },
        {
          "name": "Personal Injury & Insurance Law",
          "subfields": [
            "Personal Injury Law",
            "Medical Malpractice Law",
            "Product Liability Law",
            "Professional Malpractice (Legal, Financial, etc.)",
            "Insurance Law",
            "Car Accident & Motor Vehicle Law",
            "Wrongful Death Law"
          ]
        },
        {
          "name": "Real Estate & Property Law",
          "subfields": [
            "Real Estate Law",
            "Landlord-Tenant Law",
            "Construction Law",
            "Property Development Law",
            "Condominium & HOA Law",
            "Zoning & Land Use Law",
            "Eminent Domain & Property Seizure Law",
            "Foreclosure Defense"
          ]
        },
        {
          "name": "Financial, Banking & Tax Law",
          "subfields": [
            "Tax Law",
            "Bankruptcy Law",
            "Investment Law",
            "Financial Services Regulation",
            "Asset Protection Law",
            "Corporate Restructuring & Insolvency"
          ]
        },
        {
          "name": "Intellectual Property (IP) & Technology Law",
          "subfields": [
            "Intellectual Property Law",
            "Patent Law",
            "Copyright Law",
            "Trademark Law",
            "Trade Secrets Law",
            "Licensing & Royalties Law",
            "AI & Emerging Technologies Law",
            "Cybersecurity & Data Privacy Law"
          ]
        },
        {
          "name": "Immigration & International Law",
          "subfields": [
            "Immigration Law",
            "Refugee & Asylum Law",
            "International Law",
            "Extradition Law",
            "Foreign Investment Law",
            "Diplomatic & Consular Law",
            "Cross-Border Business Law"
          ]
        },
        {
          "name": "Constitutional, Human Rights & Public Interest Law",
          "subfields": [
            "Constitutional Law",
            "Human Rights Law",
            "Civil Rights Law",
            "Indigenous & Aboriginal Law",
            "Public Interest Law",
            "Disability Rights Law"
          ]
        },
        {
          "name": "Environmental, Energy & Natural Resources Law",
          "subfields": [
            "Environmental Law",
            "Climate Change Law",
            "Renewable Energy Law",
            "Oil & Gas Law",
            "Mining Law",
            "Water Rights Law",
            "Wildlife & Conservation Law",
            "Sustainable Development Law"
          ]
        },
        {
          "name": "Regulatory, Administrative & Government Law",
          "subfields": [
            "Administrative Law",
            "Municipal Law",
            "Professional Licensing Law",
            "Government Contracts & Procurement Law",
            "Public Utilities Law",
            "Public Policy & Legislative Advocacy",
            "Cannabis Law",
            "Consumer Protection Law"
          ]
        },
        {
          "name": "Health, Medical & Science Law",
          "subfields": [
            "Health Law",
            "Pharmaceutical Law",
            "Biotech Law",
            "Medical Ethics & Bioethics Law",
            "Hospital & Healthcare Compliance Law",
            "Public Health Law"
          ]
        },
        {
          "name": "Transportation & Maritime Law",
          "subfields": [
            "Transportation Law",
            "Maritime & Admiralty Law",
            "Aviation Law",
            "Space Law (Emerging)",
            "Railroad & Public Transit Law"
          ]
        },
        {
          "name": "Military & Security Law",
          "subfields": [
            "Military Law",
            "National Security Law",
            "International Humanitarian Law",
            "War Crimes & Human Rights Violations Law",
            "Intelligence & Surveillance Law"
          ]
        },
        {
          "name": "Technology, Media & Entertainment Law",
          "subfields": [
            "Technology Law",
            "Media & Broadcasting Law",
            "Entertainment Law",
            "Gaming & Esports Law",
            "Music Law",
            "Film & TV Law",
            "Social Media & Influencer Law",
            "Defamation & Libel Law"
          ]
        },
        {
          "name": "Sports & Recreational Law",
          "subfields": [
            "Sports Law",
            "Athlete Representation & Contract Law",
            "Olympic & International Sports Law",
            "Stadium & Venue Law"
          ]
        },
        {
          "name": "Niche & Emerging Legal Areas",
          "subfields": [
            "Space Law",
            "Fashion Law",
            "Art Law",
            "Animal Law",
            "Drone Law",
            "Psychedelics & Drug Policy Law",
            "Religious Institutions & Church Law",
            "Foreclosure Defense Law",
            "Cryptocurrency & Blockchain Law",
            "Digital Assets & NFT Law",
            "Reputation Management Law",
            "AI Ethics & Regulation Law"
          ]
        }
      ]
    }

    async function delaysomeminutes(){
      setTimeout(() => {
        document.getElementById("theloadingwait").style.display="none"
        document.getElementById("thesavealertshow").style.display="none"
      }, 2000); // 2000 milliseconds = 2 seconds
      return "continue"
    }
    
    async function addlanguages(){
    const images = document.querySelectorAll('.thelanguagesimage');
    
    images.forEach(img => {
      theselectedelement=document.getElementById('thelanguage');
      const url = img.src;
      const langy=img.getAttribute("thename")
      console.log({"Image URL": url,"Language":langy});
      const option = document.createElement('option');
      option.value = langy.toLowerCase();
      option.textContent = langy;
      if (url) {
        option.setAttribute('data-image', url);
      }
      theselectedelement.appendChild(option);
    });
  }

  async function addCategories(){
  let categoryNames = allCategories.categories.map(cat => cat.name);
  categoryNames.forEach(thiscategory=>{
    theselectedelement=document.getElementById('mySelect');
    const option = document.createElement('option');
    option.value = thiscategory.toLowerCase();
    option.textContent = thiscategory;
    theselectedelement.appendChild(option);
  })
}

  async function readselect(id){
    let selectedValuesWithoutImage = [];
    let selectedwithImage=[]

    $(`#${id}`).find(':selected').each(function () {
    const value = $(this).val();
    const image = $(this).data('image');

    if (!image) {
        theSelectedneeded={
            "value":value,
            "image":null
        }
        selectedwithImage.push(theSelectedneeded);
    }
    else{
        theSelectedneeded={
            "value":value,
            "image":image
        }
        selectedwithImage.push(theSelectedneeded)
    }
    });
    return selectedwithImage
  }

  async function readselectnoImage(id){
    let selectedValuesWithoutImage = [];
    let selectedwithImage=[]

    $(`#${id}`).find(':selected').each(function () {
    const value = $(this).val();
    const image = $(this).data('image');
    selectedValuesWithoutImage.push(value)
    
    });
    return selectedValuesWithoutImage
  }

  async function addSubCategories(thetargetCategories){

    let selectedValuesWithoutImage = [];

    $('#mySelect').find(':selected').each(function () {
    const value = $(this).val();
    const image = $(this).data('image');

    if (!image) {
        selectedValuesWithoutImage.push(value);
    }
    });

    console.log("🦸🏽‍♂️🦸🏽‍♂️🦸🏽‍♂️🦸🏽‍♂️🦸🏽‍♂️🦸🏽‍♂️",selectedValuesWithoutImage);
    let targetCategories=selectedValuesWithoutImage
    if(targetCategories.length<=0){
    targetCategories = thetargetCategories
    }
    /*
    [
    "Business & Corporate Law"
    ];
    */
    const selectedSubfields = allCategories.categories
    .filter(cat => 
        targetCategories.map(name => name.toLowerCase()).includes(cat.name.toLowerCase())
    )
    .flatMap(cat => cat.subfields);

    console.log("🔐🔐🔐🔐🔐🔐🔐💧💧💧",selectedSubfields);
     
    selectedSubfields.forEach(thissubcategory=>{
    theselectedelement=document.getElementById('subSelect');
    const option = document.createElement('option');
    option.value = thissubcategory.toLowerCase();
    option.textContent = thissubcategory;
    theselectedelement.appendChild(option);
  })
    
  }
  
  async function generateUniqueId() {
  const timestamp = Date.now().toString(36); // base36 for compactness
  const random = Math.random().toString(36).substring(2, 10); // remove "0." and take 8 chars
  return `${timestamp}-${random}`;
}


  document.addEventListener('DOMContentLoaded', async () => {

    const minRateInput = document.getElementById("minRate");
    const maxRateInput = document.getElementById("maxRate");
    
    minRateInput.addEventListener("change", () => {
      const minValue = parseFloat(minRateInput.value);
      
      if (!isNaN(minValue)) {
        // Set min attribute for maxRate input
        maxRateInput.min = minValue + 1; // or just `minValue` if you allow equal
      }
    });

    minRateInput.addEventListener("change", () => {
      const minValue = parseFloat(minRateInput.value);
    
      if (!isNaN(minValue)) {
        const newMinForMax = minValue + 1;
        maxRateInput.min = newMinForMax;
    
        if (parseFloat(maxRateInput.value) < newMinForMax) {
          maxRateInput.value = newMinForMax;
        }
      }
    });

    maxRateInput.addEventListener("change", () => {
      if (parseFloat(maxRateInput.value) <= parseFloat(minRateInput.value)) {
        maxRateInput.setCustomValidity("Max rate must be greater than min rate");
      } else {
        maxRateInput.setCustomValidity("");
      }
    });

      // Get all uploadcare inputs
      const inputs = document.querySelectorAll('[role=uploadcare-uploader]');
      let url
  
      inputs.forEach((input, index) => {
        const widget = uploadcare.Widget(input);
        const uploaderId = input.id; // Capture the uploader's ID here
  
        widget.onUploadComplete(async (info) => {

          if(uploaderId!="certicateUpload"){
          document.getElementById("theloadingwait").style.display="flex"
          }
          if (info.uuid.includes('~')) {
            try {
              const group = await uploadcare.loadFileGroup(info.uuid);

              const fileInfos = await group.files(); // ← correct way

              const urls = await Promise.all(
                fileInfos.map(file =>
                  typeof file.then === "function" ? file.then(f => f.cdnUrl) : file.cdnUrl
                )
              );

              console.log("✅ Final URLs:", urls);
            } catch (error) {
              console.error("❌ Failed to load file group:", error);
            }
          }
        else{ 
        console.log('Upload info:', info);  // Log the entire info object to see its structure
        console.log("💧🌮🔐🧑🏿‍❤️‍💋‍🧑🏾👩🏽‍💻🧑🏿‍❤️‍💋‍🧑🏽",uploaderId)
     
        const fileUrl = info.cdnUrl;  // The base URL without file extension
        const fileName = info.name;  // Check if 'original' exists
        const fullFileUrl = fileName ? fileUrl + fileName : fileUrl;
        
        let theuploadFile=await uploadFile(fileUrl,fileName)
        console.log("🐇🐇🐇🐇",theuploadFile)
        let thejsonfile=JSON.parse(theuploadFile)
        url=thejsonfile.url
        
        }
        let updateemail=localStorage.getItem("userEmail")
        let dbuser=await getItem(updateemail)
        let mongodbuser=JSON.parse(dbuser)
        let userData=mongodbuser.data.body
        let jsonUser=JSON.parse(JSON.parse(userData))
        // Construct the full URL if 'original' is present
        if(uploaderId=="uploadfile"){
          
          let thedata={
            "profile image":url
          }
          let theupdatedItem=await updateItem(updateemail,thedata)
          console.log(theupdatedItem)
          updatedom=await updateallthefields(updateemail)
          document.getElementById("thesavealertshow").style.display="flex"
          let hidepopup=await delaysomeminutes()
        }

        if(uploaderId=="uploadtestimonials"){
          let thetestimonials=jsonUser["client video testimonials"]
          let thisuniqueId=await generateUniqueId()
          let thisvideo={
            "url":url,
            "unique id":thisuniqueId
          }
          thetestimonials.push(thisvideo)
          let thedata={
            "client video testimonials":thetestimonials
          }
          let theupdatedItem=await updateItem(updateemail,thedata)
          console.log(theupdatedItem)
          updatedom=await updateallthefields(updateemail)
          document.getElementById("thesavealertshow").style.display="flex"
          let hidepopup=await delaysomeminutes()
        }

        if(uploaderId=="casestudywalkthroughuploader"){
          
          let casestudywalkthroughs=jsonUser["case study walkthroughs"]
          let thisuniqueId=await generateUniqueId()
          let thiscasestudy={
            "url":url,
            "unique id":thisuniqueId
          }
          casestudywalkthroughs.push(thiscasestudy)
          let thedata={
            "case study walkthroughs":casestudywalkthroughs
          }
          let theupdatedItem=await updateItem(updateemail,thedata)
          console.log(theupdatedItem)
          updatedom=await updateallthefields(updateemail)
          document.getElementById("thesavealertshow").style.display="flex"
          let hidepopup=await delaysomeminutes()
        }
        
        if(uploaderId=="certicateUpload"){
          thecertificates=jsonUser["certificates"]
          thecertificates.push(url)
        }
        //console.log(`Uploader ${index + 1} uploaded:`, fileName);
        //console.log(`File name with extension:`, fileName);

        // Optional: send to backend or store in hidden input
        // Example: document.querySelector(`#file-url-${index}`).value = fullFileUrl;
        // Example: document.querySelector(`#file-name-${index}`).value = fileName;
        });
      });
    });


     $(document).ready(function () {
      let themember
      let themembership

      document.getElementById("thepreviewlinkinput").addEventListener("change", function () {
        document.getElementById("thepreviewdisplay").setAttribute("href", "https://lawggle-b065c1-7854620dcb65bd8d14aa462e.webflow.io/");
        document.getElementById("thepreviewtestcont").style.display="flex"
      });  
      //save data in mongodb


      document.querySelectorAll('.selectyesno').forEach(parent => {
        const children = parent.querySelectorAll('*');
      
        children.forEach(child => {
          child.addEventListener('click', (event) => {
            // Prevent any default Webflow handling
            // event.stopPropagation(); // optional
            // event.preventDefault();  // optional
      
            // Create and dispatch a custom event on the parent
            const relay = new CustomEvent('child-click', {
              detail: {
                originalEvent: event,
                child: child
              },
              bubbles: false // to avoid unintended propagation
            });
      
            parent.dispatchEvent(relay);
          });
        });
      
        parent.addEventListener('child-click', async (e) => {
          console.log('Parent:', parent.id);
          let buttonId=parent.id

         if(buttonId=="freeconsulationyes"){
              document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "free consultation":"yes"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()
         }
         if(buttonId=="freeconsultationno"){
              document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "free consultation":"no"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()

         }
         if(buttonId=="offercontingencyyes"){
              document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "offer contingency":"yes"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()

          }
          if(buttonId=="offercontingencyno"){
              document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "offer contingency":"no"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()

          }
          if(buttonId=="probonoyes"){
              document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "community pro bono work":"yes"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()


          }
          if(buttonId=="probonono"){
            document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "community pro bono work":"no"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()

          }
        });
      });
      
      let switchButtons=document.querySelectorAll(".selectyesno")
      switchButtons.forEach((thisbutton)=>{
        thisbutton.addEventListener("click",async (event)=>{
         let button=event.target
         let buttonId=button.id

         if(buttonId=="freeconsulationyes"){
              document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "free consultation":"yes"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()
         }
         if(buttonId=="freeconsultationno"){
              document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "free consultation":"no"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()

         }
         if(buttonId=="offercontingencyyes"){
              document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "offer contingency":"yes"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()

          }
          if(buttonId=="offercontingencyno"){
              document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "offer contingency":"no"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()

          }
          if(buttonId=="probonoyes"){
              document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "community pro bono work":"yes"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()


          }
          if(buttonId=="probonono"){
            document.getElementById("theloadingwait").style.display="flex"
              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "community pro bono work":"no"
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()

          }
        })
      })

      let userLongitude=""
      let userLat=""

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            userLongitude = position.coords.latitude;
            userLat = position.coords.longitude;
      
            console.log("Latitude:", userLat);
            console.log("Longitude:", userLongitude);
      
            // You can now send this to your backend, use it on a map, etc.
          },
          error => {
            console.error("Geolocation error:", error.message);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }


      let saveButtons=document.querySelectorAll(".savethedtails")
      saveButtons.forEach((thisbutton)=>{
        thisbutton.addEventListener("click",async (event)=>{
             let button=event.target
             let buttonIdentifier=button.getAttribute("sect")


             if(buttonIdentifier=="section1save"){
              document.getElementById("theloadingwait").style.display="flex"
              let pronouns=await readselectnoImage("selectpronouns")
              let name=document.getElementById("firstlastname").value
              let minhourlyRate=document.getElementById("minRate").value
              let maxhourlyRate=document.getElementById("maxRate").value
              let firmurl=document.getElementById("firmurl").value
              let expertCategory=await readselectnoImage("mySelect")
              let expertSubCategory=await readselectnoImage("subSelect")
              let educationsave=document.getElementById("educationsave").value

              let updateemail=localStorage.getItem("userEmail")
              let savedata={
                "pronouns":pronouns,
                "name":name,
                "min hourly rate":minhourlyRate,
                "max hourly rate":maxhourlyRate,
                "firm url":firmurl,
                "expertise subcategory":expertSubCategory,
                "expertise category":expertCategory,
                "education":educationsave,
                "address":{
                  "long":userLongitude,
                  "lat":userLat
                }
              }
              console.log(updateemail,savedata)
              updateduser=await updateItem(updateemail,savedata)
              updatedom=await updateallthefields(updateemail)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()
              
             }
             if(buttonIdentifier=="section2save"){
              document.getElementById("theloadingwait").style.display="flex"
              let thisUserId=localStorage.getItem("userEmail")
              let dbuser=await getItem(thisUserId)
              let mongodbuser=JSON.parse(dbuser)
              let userData=mongodbuser.data.body
              let jsonUser=JSON.parse(JSON.parse(userData))
              let notablecasewins=jsonUser["notable case wins"]
              let caseTitle=document.getElementById("casewinstitle").value
              let caseDescription=document.getElementById("casewinsdescription").value
              if(caseTitle&&caseDescription){
              theuniqueId=await generateUniqueId()
              let thiscase={
                "uniqueId":theuniqueId,
                "title":caseTitle,
                "description":caseDescription
              }
              notablecasewins.push(thiscase)
              let toChangeData={"notable case wins":notablecasewins}
              console.log(toChangeData)
              let updateduser=await updateItem(thisUserId,toChangeData)
              let updatenewestdom=await updateallthefields(thisUserId)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()
             }
             else{

             }
            }
            if(buttonIdentifier=="section3save"){
              document.getElementById("theloadingwait").style.display="flex"
              let thisUserId=localStorage.getItem("userEmail")
              let dbuser=await getItem(thisUserId)
              let mongodbuser=JSON.parse(dbuser)
              let userData=mongodbuser.data.body
              let jsonUser=JSON.parse(JSON.parse(userData))
              let mediapressbriefings=jsonUser["media press mentions"]
              let mediapresslink=document.getElementById("thepreviewlinkinput").value
              let theuniqueId=await generateUniqueId()
              let thismediapressdata={
                 "uniqueId":theuniqueId,
                 "url":mediapresslink
              }
              mediapressbriefings.push(thismediapressdata)
              let toChangeData={"media press mentions":mediapressbriefings}
              console.log(toChangeData)
              let updateduser=await updateItem(thisUserId,toChangeData)
              let updatenewestdom=await updateallthefields(thisUserId)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()
            }
            else{

            }
             if(buttonIdentifier=="section4save"){
              document.getElementById("theloadingwait").style.display="flex"
              let thisUserId=localStorage.getItem("userEmail")
              let dbuser=await getItem(thisUserId)
              let mongodbuser=JSON.parse(dbuser)
              let userData=mongodbuser.data.body
              let jsonUser=JSON.parse(JSON.parse(userData))
              let qaquestions=jsonUser["personal qa"]
              let qaquiz=document.getElementById("theqaquizinput").value
              let qaanswer=document.getElementById("qaanswerinput").value
              if (qaanswer&&qaquiz){
              let theuniqueId=await generateUniqueId()
              let thisqadata={
                 "uniqueId":theuniqueId,
                 "question":qaquiz,
                 "answer":qaanswer
              }
              qaquestions.push(thisqadata)
              let toChangeData={"personal qa":qaquestions}
              console.log(toChangeData)
              let updateduser=await updateItem(thisUserId,toChangeData)
              let updatenewestdom=await updateallthefields(thisUserId)
              document.getElementById("thesavealertshow").style.display="flex"
              let todelay=await delaysomeminutes()
             }
            }
            if(buttonIdentifier=="section5save"){
              document.getElementById("theloadingwait").style.display="flex"
              let thisUserId=localStorage.getItem("userEmail")
              let lawyerlanguages=await readselect("thelanguage")
              let theinterestsandhobbies=await readselectnoImage("HobbySelect")
              let thelawyercerticates=thecertificates
              let awardText=document.getElementById("awardsrecognition").value
              let awardList=awardText.split(/\r?\n/);
              let blogContributer=await readselectnoImage("BlogSelect")
              let clientcentricMisssionStatement=document.getElementById("clientcentricMission").value
              let dynamicbio=document.getElementById("dynamicbio").value
              
              let toChangeData={
                "languages":lawyerlanguages,
                "interests and hobbies":theinterestsandhobbies,
                "certificates":thelawyercerticates,
                "awards recognition":awardList,
                "blog contributor":blogContributer,
                "client centric mission":clientcentricMisssionStatement,
                "dynamic bio":dynamicbio
              }

              let updateduser=await updateItem(thisUserId,toChangeData)
              document.getElementById("thesavealertshow").style.display="flex"
              let updatenewestdom=await updateallthefields(thisUserId)
              let todelay=await delaysomeminutes()
            }
        })
      })

      //Memberstack read
      MemberStack.onReady.then(async function(member) {
      if (member.loggedIn) {
        const memberships = member.membership; // Array of memberships
        //const membershipNames = memberships.map(m => m.name).join(', ');
        console.log(member,memberships)
        memberemail=member.email
        localStorage.setItem("userEmail",member.email)
        let thegetuser=await updateallthefields(memberemail,member)
      } else {
        console.log("Not logged in")
      }
    });


      async function configureSelect(theid,containerId,theselected){
      
      const containerSelector = `${containerId}`;
      const style = document.createElement('style');
      style.innerHTML = `
        ${containerSelector} {
          overflow-x: hidden;
        }
    
        ${containerSelector} * {
          box-sizing: border-box;
        }
    
        ${containerSelector} .select2-container {
          max-width: 100%;
        }
    
        ${containerSelector} .select2-selection__rendered {
          display: flex !important;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
        }
    
        ${containerSelector} .select2-selection__choice {
          padding-right: 8px !important;
          border-radius: 8px !important;
        }
      `;
      document.head.appendChild(style);
      
     let elementId=theid
      $(`#${elementId}`).select2({
      templateResult: formatOption,
      templateSelection: formatOption, // optional: shows image inside selected tag too
    });
      function formatOption(option) {
      if (!option.id) return option.text;
    
      const imageUrl = $(option.element).data('image');
      const text = option.text;
    
      if (!imageUrl) return text;
    
      return $(`
        <div style="display: flex; align-items: center; gap: 8px;">
          <img src="${imageUrl}" style="width: 20px; height: 20px; border-radius: 50%;" />
          <span>${text}</span>
        </div>
      `);
    }
    
      $(`#${elementId}`).on('change', function () {
      const selected = $(this).find(':selected');
      const elementId = this.id;
      selected.each(async function () {
        const value = $(this).val();
        const text = $(this).text();
        const image = $(this).data('image');

        if(elementId=="mySelect"){
            document.getElementById("subSelect").innerHTML=""
            await addSubCategories(["Business & Corporate Law"])
            await configureSelect("subSelect","#thesubselectcontain")
        }
    
        console.log('Selected: ', {
          value,
          text,
          image
        });
      });
    });

    
     }
     
    let selectelements=[{"id":"selectpronouns","container":"#pronounselecthold","select":theLawyerPronouns},{id:"mySelect","container":"#expertiseselecthold","select":2},{id:"subSelect","container":"#thesubselectcontain","select":theSubcategory2},{id:"thelanguage","container":"#thelangy","select":"theLawyerPronouns"},{id:"HobbySelect","container":"#hobbyselecthold","select":"theLawyerPronouns"},{id:"BlogSelect","container":"#blogselecthold","select":"theLawyerPronouns"}]


    async function fillallSelect(){
    await addCategories()
    await addSubCategories(["Business & Corporate Law"])
    await addlanguages()
    for (let element in selectelements){
        configureSelect(selectelements[element].id,selectelements[element].container,selectelements[element].select)
    }
   }

   fillallSelect()
        
    });

  async function updateItem(email,data) {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      data: data
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch("https://7zsvpwqz67pnyridifgchw7gda0sxhqy.lambda-url.eu-north-1.on.aws/updateitem", requestOptions);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error("Error updating item:", error);
  }
}

//getitem function
async function getItem(email) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email: email
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  try {
    const response = await fetch("https://7zsvpwqz67pnyridifgchw7gda0sxhqy.lambda-url.eu-north-1.on.aws/getitem", requestOptions);
    const result = await response.text(); // or use .json() if you're returning JSON
    console.log(result);
    return result
  } catch (error) {
    console.error("Error:", error);
  }
}



async function sendCreateItemRequest(data) {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(data);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  try {
    const response = await fetch("https://7zsvpwqz67pnyridifgchw7gda0sxhqy.lambda-url.eu-north-1.on.aws/createitem", requestOptions);
    const result = await response.text(); // or response.json() if server returns JSON
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function uploadFile(url,name){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    fileUrl: url,
    fileName: name
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  try {
    const response = await fetch("https://7zsvpwqz67pnyridifgchw7gda0sxhqy.lambda-url.eu-north-1.on.aws/upload-file", requestOptions);
    const result = await response.text();
    console.log(result);
    return result
  } catch (error) {
    console.error("Upload error:", error);
    return{"status":"error"}
  }
};

async function updateallthefields(email,member={}){
  try{
         let dbuser=await getItem(email)
         let mongodbuser=JSON.parse(dbuser)
         console.log("🤑🤑🤑🤑",mongodbuser.status,typeof(mongodbuser.status))
         if(mongodbuser.status=="true"){
           console.log("user exist in database")
           let userData=mongodbuser.data.body
           let jsonUser=JSON.parse(JSON.parse(userData))
           console.log("🧑🏿‍❤️‍💋‍🧑🏽🧑🏿‍❤️‍💋‍🧑🏽🧑🏿‍❤️‍💋‍🧑🏽🧑🏿‍❤️‍💋‍🧑🏽🧑🏿‍❤️‍💋‍🧑🏽👩🏽‍💻",jsonUser.name,typeof(jsonUser),typeof(userData))
           const pageinputs = document.querySelectorAll('input');
           theCategory2=jsonUser["expertise category"]
           theLawyerPronouns=jsonUser["theLawyerPronouns"]
           theSubcategory2=jsonUser["expertise subcategory"]
           let alltheIDS=["selectpronouns"]
           let languagelist=[]
           let lawyerlanguages=jsonUser["languages"]
           for (let eachlangy in lawyerlanguages){
            languagelist.push(lawyerlanguages[eachlangy].value)
           }
           let offerconsultation=jsonUser["free consultation"]
           if(offerconsultation=="yes"){
             document.getElementById("offerconsultancyimageno").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png"
             document.getElementById("offerconsultancyimageyes").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png"
           }
           else{
            document.getElementById("offerconsultancyimageno").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png"
             document.getElementById("offerconsultancyimageyes").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png"
           }
           let offercontingency=jsonUser["offer contingency"]
           if(offercontingency=="yes"){
            document.getElementById("offercontingencyimageno").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png"
             document.getElementById("offercontingencyimageyes").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png"
           }
           else{
            document.getElementById("offercontingencyimageno").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png"
             document.getElementById("offercontingencyimageyes").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png"
           }
           let probonowork=jsonUser["community pro bono work"]
           if(probonowork=="yes"){
            document.getElementById("probonoimageno").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png"
             document.getElementById("probonoimageyes").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png"   
           }
           else{
            document.getElementById("probonoimageno").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f689ee9a1a8514a23f8919_icons8-checked-box-24.png"
             document.getElementById("probonoimageyes").src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f688109c8eaf330c0f0e34_icons8-unchecked-checkbox-50.png"
           }
           $(`#BlogSelect`).val(jsonUser["blog contributor"]).trigger('change');
           $(`#HobbySelect`).val(jsonUser["interests and hobbies"]).trigger('change');
           $(`#thelanguage`).val(languagelist).trigger('change');
           $(`#selectpronouns`).val(jsonUser["pronouns"]).trigger('change');
           $(`#mySelect`).val(jsonUser["expertise category"]).trigger('change');
           document.getElementById("subSelect").innerHTML=""
           let recreate=await addSubCategories(jsonUser["expertise category"])
           $(`#subSelect`).val(jsonUser["expertise subcategory"]).trigger('change');
           pageinputs.forEach(input => {
              console.log(input.name, input.value);
              inputfor=input.getAttribute("inputfor")
              if(inputfor!=undefined){
              try{
                input.value=jsonUser[inputfor]
              }
               catch(e){
                input.value=jsonUser[inputfor]
              }
            }
            });

            if (jsonUser["profile image"]!=null&&jsonUser["profile image"]!=undefined&&jsonUser["profile image"]!=""){
              document.getElementById("showcaseprofile").src=jsonUser["profile image"]
              document.getElementById("uploadfilesprompt").style.display="none"
              document.getElementById("profileimagecontainer").style.display="flex"
            }
            else{
              document.getElementById("uploadfilesprompt").style.display="flex"
              //document.getElementById("profileimagecontainer").style.display="none"
            }
            let caseWins=jsonUser["notable case wins"]
            if(caseWins.length>0){
              let thecaseslider=document.getElementById("profileditcases")
              thecaseslider.innerHTML=""
              document.getElementById("thenotablecasewinform").style.display="none"
              document.getElementById("thecasewinelements").style.display="flex"
              for(let eachcase in caseWins){
                console.log(eachcase)
                let casewinheader=document.createElement("p")
                casewinheader.classList.add("casewinheader")
                casewinheader.classList.add("wrapparagraph")
                casewinheader.textContent=caseWins[eachcase].title
                let caseparagraph=document.createElement("p")
                caseparagraph.classList.add("casewinparagraph")
                caseparagraph.classList.add("wrapparagraph")
                caseparagraph.textContent=caseWins[eachcase].description
                let caseiconcontainer=document.createElement("div")
                caseiconcontainer.classList.add("casewiniconhold")
                let expandicon=document.createElement("img")
                expandicon.src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67fe46e9e623823192adea98_icons8-expand-50%20(3).png"
                expandicon.classList.add("theiconsnew")
                let deletedicon=document.createElement("img")
                deletedicon.src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png"
                deletedicon.classList.add("theiconsnew")
                let editicon=document.createElement("img")
                editicon.src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6df9d8c1aed7f8f8c1fc7_Group%201597881167.png"
                editicon.classList.add("theiconsnew")
                caseiconcontainer.append(expandicon,deletedicon,editicon)
                let thecasecontainer=document.createElement("div")
                thecasecontainer.classList.add("notablecases")
                thecasecontainer.classList.add("casebox")

                thecasecontainer.append(casewinheader,caseparagraph,caseiconcontainer)
                thecaseslider.appendChild(thecasecontainer)
              }
              document.getElementById("notablecasewinsopener").style.display="flex"
            }
            else{
              document.getElementById("thenotablecasewinform").style.display="flex"
              document.getElementById("thecasewinelements").style.display="none"
            }

            let clientTestimonials=jsonUser["client video testimonials"]
            if(clientTestimonials.length>0){
              let thecaseslider2=document.getElementById("editclientvideotestimonials")
              thecaseslider2.innerHTML=""

              for(let testimonialvideos in clientTestimonials){
                let sliderelement2=document.createElement("div")
                sliderelement2.classList.add("slide-5c","w-slide")
                let testimonialdiv=document.createElement("div")
                testimonialdiv.classList.add("vid-wrap","edit-page")
                let testimonialvideo=document.createElement("video")
                testimonialvideo.controls = true;
                testimonialvideo.classList.add("videoclass")
                let videosource=document.createElement("source")
                videosource.src=clientTestimonials[testimonialvideos].url
                testimonialvideo.append(videosource)
                let theimagecheck=document.createElement("img")
                theimagecheck.classList.add("deleteicongroup")
                theimagecheck.src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png"
                testimonialdiv.append(testimonialvideo,theimagecheck)
                sliderelement2.append(testimonialdiv)
                thecaseslider2.append(sliderelement2)
              }
              if (window.Webflow && Webflow.require) {
                Webflow.require('slider').ready();
              }
            }
            else{
            }

            let mediaPressBriefs=jsonUser["media press mentions"]
            if(mediaPressBriefs.length>0){
              let thecaseslider3=document.getElementById("themediaslidingcontainer")
              thecaseslider3.innerHTML=""
              
              for(let pressbrief in mediaPressBriefs){
                let thepressSlider=document.createElement("div")
                thepressSlider.classList.add("slide-5c","media","w-slide")
                let presscontainer=document.createElement("div")
                presscontainer.classList.add("presscontainer")
                let previewBox = document.createElement("previewbox-link");
                previewBox.setAttribute("href", mediaPressBriefs[pressbrief].url);
                let pressdeleteicon=document.createElement("img")
                pressdeleteicon.src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png"
                pressdeleteicon.classList.add("deletebriefs")
                presscontainer.append(previewBox,pressdeleteicon)
                thepressSlider.append(presscontainer)
                thecaseslider3.append(thepressSlider)
              }
            }
            else{
            }

            let caseStudyWalkthroughs=jsonUser["case study walkthroughs"]

            if(caseStudyWalkthroughs.length>0){

              let thecaseslider4=document.getElementById("thecasestudywalkthriughedit")
              thecaseslider4.innerHTML=""
              
              for(let eachcasestudy in caseStudyWalkthroughs){
                let sliderelement4=document.createElement("div")
                sliderelement4.classList.add("slide-img","2ni","w-slide")
                let casediv=document.createElement("div")
                casediv.classList.add("img-wrap","editpage")
                let casevideo=document.createElement("video")
                casevideo.controls = true;
                casevideo.classList.add("videoclassprof")
                let casevideosource=document.createElement("source")
                casevideosource.src=caseStudyWalkthroughs[eachcasestudy].url
                casevideo.append(casevideosource)
                let casetheimagecheck=document.createElement("img")
                casetheimagecheck.classList.add("deleteicongroup")
                casetheimagecheck.src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png"
                casediv.append(casevideo,casetheimagecheck)
                sliderelement4.append(casediv)
                thecaseslider4.append(sliderelement4)
              }
              if (window.Webflow && Webflow.require) {
                Webflow.require('slider').ready();
              } 
            }
            else{

            }

            let questionsAndAnswers=jsonUser["personal qa"]
            if(questionsAndAnswers.length>0){
              let thecaseslider5=document.getElementById("qaquzicontainer")
              thecaseslider5.innerHTML=""
              document.getElementById("questionsshow").style.display="flex"
              document.getElementById("questioncreate").style.display="none"
              //document.getElementById("casestudyeditswitch").style.display="flex"    
              for (let eachquiz in questionsAndAnswers){
               //let thequizcontainer=document.createElement("div")
               //thequizcontainer.classList.add("qacarrierdiv")
               let thequizcarrier=document.createElement("div")
               thequizcarrier.classList.add("theqadiv")
               let headcarrier=document.createElement("div")
               headcarrier.classList.add("qaheader")
               let headertext=document.createElement("p")
               headertext.classList.add("qaheadertext")
               headertext.innerText=questionsAndAnswers[eachquiz].question
               let qadelete=document.createElement("img")
               qadelete.classList.add("qaicons")
               qadelete.src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6dfbc2b16d9977c85eeb2_Group%201597881168.png"
               let iconsHolder=document.createElement("div")
               iconsHolder.classList.add("qaiconsholder")
               let qaedit=document.createElement("img")
               qaedit.classList.add("qaicons")
               qaedit.src="https://cdn.prod.website-files.com/67e360f08a15ef65d8814b41/67f6df9d8c1aed7f8f8c1fc7_Group%201597881167.png"
               let qaanswer=document.createElement("p")
               qaanswer.classList.add("qapragraph")
               qaanswer.innerText=questionsAndAnswers[eachquiz].answer
               iconsHolder.append(qaedit,qadelete)
               headcarrier.append(headertext,iconsHolder)
               thequizcarrier.append(headcarrier,qaanswer)
               thecaseslider5.append(thequizcarrier)
              }
            }
            else{
              document.getElementById("questionsshow").style.display="none"
              document.getElementById("questioncreate").style.display="flex"
            }

            let mongodbcertificates=jsonUser["certificates"]
            if(mongodbcertificates.length>0){
              let thecaseslider6=document.getElementById("thecertificatecontainer")
              thecaseslider6.innerHTML=""
              document.getElementById("thecertimaincontainer").style.display="flex"
              document.getElementById("thecertificateuploader").style.display="none"

              for (let eachcert in mongodbcertificates){
                let certcontain=document.createElement("div")
                certcontain.classList.add("certicatecontainer")
                let thecertimage=document.createElement("img")
                thecertimage.classList.add("certicateimage")
                let certdelete=document.createElement("img")
                certdelete.classList.add("deletebriefs")
                certcontain.append(thecertimage,certdelete)
                thecaseslider6.append(certcontain)
              }
            }
            else{
              document.getElementById("thecertimaincontainer").style.display="none"
              document.getElementById("thecertificateuploader").style.display="flex"
            }
         }
         if (mongodbuser.status=="false"){
          data={
                "canada-or-usa": member["canada-or-usa"],
                "email": member.email,
                "firm-name": member["firm-name"],
                "name": `${member["first-name"]} ${member["last-name"]}`,
                "profile image": "",
                "id": "testid",
                "memberstackid":member.id,
                "membership": member.membership,
                "Phone": member.phone,
                "created_at": "",
                "pronouns": [],
                "hourly rate": "",
                "firm url": "",
                "expertise category": [],
                "expertise subcategory": [],
                "education": [],
                "address": "",
                "free consultation": "",
                "offer contingency": "",
                "community pro bono work": "",
                "profile video": "",
                "notable case wins": [],
                "client video testimonials": [],
                "media press mentions": [],
                "case study walkthroughs": [],
                "blogs": [],
                "personal qa": [],
                "language": "",
                "interests and hobbies": [],
                "certificates": [],
                "awards recognition": [],
                "blog contributor": "",
                "client centric mission": "",
                "dynamic bio": ""
              }
              itemcreated=await sendCreateItemRequest(data)
              console.log(itemcreated)
         }
        }
        catch(e){
          console.log(e)
        }
}
    