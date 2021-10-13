<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Home Page</h1>

          <div class="fsa-level fsa-level--justify-between fsa-level--align-top">
            <span>
              <field
                ID="name"
                EXTRA_CLASSES=""
                LABEL="Full Name"
                INPUT_VALUE=""
                INPUT_TYPE="text"
                REQUIRED="true"
                ARIA_REQUIRED="true"
                BEHAVIOR=""
                ARIA_DESCRIBEDBY="name__help"
                HELP_MESSAGE="Use your full name, please."
                ERROR_MESSAGE="Hey, you forgot your name, Buddy!"
                HAS_ERROR="false"
                ref="nameField"
              >
              </field>
            </span>
            <span>
              <p class="fsa-m-t--l">
                <button @click="setError('name')" class="fsa-btn fsa-btn--secondary">Toggle Name Error</button>
              </p>
            </span>
          </div>

          <div class="fsa-level fsa-level--justify-between fsa-level--align-top">
            <span>
              <field
                ID="email"
                EXTRA_CLASSES=""
                LABEL="E-Mail"
                INPUT_VALUE=""
                INPUT_TYPE="text"
                REQUIRED="false"
                ARIA_REQUIRED="true"
                BEHAVIOR=""
                ARIA_DESCRIBEDBY="email__help"
                HELP_MESSAGE="Only valid emails should be used."
                ERROR_MESSAGE="'Hey, you forgot your email address!'"
                ref="emailField"
              >
              </field>
            </span>
            <span>
              <p class="fsa-m-t--l">
                <button @click="setError('email')" class="fsa-btn fsa-btn--secondary">Toggle Email Error</button>
              </p>
            </span>
          </div>

          <div class="fsa-level fsa-level--justify-between fsa-level--align-top">
            <span>
              <field-group
                GROUP_ID="pies"
                GROUP_TYPE="radio"
                DISPLAY=""
                LABEL="Pick a Pie"
                :DATA="pieData"
                REQUIRED=""
                BEHAVIOR=""
                EXTRA_CLASSES="fsa-field--block"
                FIELD_ERROR_CLASS=""
                ARIA_REQUIRED="false"
                HELP_MESSAGE="Select your favorite."
                ERROR_MESSAGE="Why don't you like my pies?"
                ref="pieField"
              >
              </field-group>
            </span>
            <span>
              <p class="fsa-m-t--l">
                <button @click="setError('pies')" class="fsa-btn fsa-btn--secondary">Toggle Pie Error</button>
              </p>
            </span>
          </div>

          <div class="fsa-level fsa-level--justify-between fsa-level--align-top">
            <span>
              <selection
                ID="vehicle"
                LABEL="What vehicle do you drive?"
                :DATA="vehicleData"
                REQUIRED=""
                EXTRA_CLASSES="fsa-field--block"
                FIELD_ERROR_CLASS=""
                ARIA_REQUIRED="false"
                HELP_MESSAGE="Select your ride."
                ERROR_MESSAGE="You must like walking!"
                ref="vehicleField"
              >
              </selection>
            </span>
            <span>
              <p class="fsa-m-t--l">
                <button @click="setError('vehicle')" class="fsa-btn fsa-btn--secondary">Toggle Vehicle Error</button>
              </p>
            </span>
          </div>

        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent  } from 'vue';


import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

const field = defineAsyncComponent(() => import('@/components/field/field.vue'));
const fieldGroup = defineAsyncComponent(() => import('@/components/field-group/field-group.vue'));
const selection = defineAsyncComponent(() => import('@/components/selection/selection.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    field,
    fieldGroup,
    selection
  },

  setup(props){
    const nameField = ref(null);
    const emailField = ref(null);
    const pieField = ref(null);
    const vehicleField = ref(null);

    const pieData = [
      { id: "pie1", label: "Apple Pie", name: "piegroup" },
      { id: "pie2", label: "Pumpkin Pie", name: "piegroup" },
      { id: "pie3", label: "Keylime Pie", name: "piegroup" },
      { id: "pie4", label: "French Silk Pie", name: "piegroup" },
    ];

    const vehicleDataXYZ = [
      { id: "v1", label: "Motor Scooter", val: "scoot", name: "small"},
      { id: "v2", label: "Cafe Racer", val: "cf", name: "small"},
      { id: "v3", label: "Can-Am", val: "can", name: "small"},
      { id: "v4", label: "4-Door Sedan", val: "sedan", name: "medium"},
      { id: "v5", label: "Sports Coupe", isSelected: "selected", val: "Coupe", name: "medium"},
      { id: "v6", label: "Cross Over SUV", val: "xo", name: "medium"},
      { id: "v7", label: "Minivan", val: "van", name: "large"},
      { id: "v8", label: "Pickup Truck", val: "truck", name: "large"},
      { id: "v9", label: "7 Passenger SUV", val: "suv", name: "large"},
      { id: "v10", label: "15 Passenger Van", val: "bigvan", name: "large"}
    ];

    const vehicleData = [
      { 
        groupId: "g1",
        groupLabel: "Small Vehicales",
        groupData: [
          { id: "v1", label: "Motor Scooter", val: "scoot", name: "small"},
          { id: "v2", label: "Cafe Racer", val: "cf", name: "small"},
          { id: "v3", label: "Can-Am", val: "can", name: "small"},
        ]
      },
      { 
        groupId: "g2",
        groupLabel: "Medium Vehicales",
        groupData: [
          { id: "v4", label: "4-Door Sedan", val: "sedan", name: "medium"},
          { id: "v5", label: "Sports Coupe", isSelected: "selected", val: "Coupe", name: "medium"},
          { id: "v6", label: "Cross Over SUV", val: "xo", name: "medium"},
        ]
      },
      { 
        groupId: "g3",
        groupLabel: "Large Vehicales",
        groupData: [
          { id: "v7", label: "Minivan", val: "van", name: "large"},
          { id: "v8", label: "Pickup Truck", val: "truck", name: "large"},
          { id: "v9", label: "7 Passenger SUV", val: "suv", name: "large"},
          { id: "v10", label: "15 Passenger Van", val: "bigvan", name: "large"},
        ]
      },
    ];

    let nameHasError = ref(false);
    let emailHasError = ref(false);
    let piesHasError = ref(false);
    let vehicleHasError = ref(false);

    const setError = (type) => {
      if(type=='name'){
        nameHasError.value = nameHasError.value ? false : true;
        nameField.value.setHasError(nameHasError.value);
      } 
      if(type=='email'){
        emailHasError.value = emailHasError.value ? false : true;
        emailField.value.setHasError(emailHasError.value);
      }
      if(type=='pies'){
        piesHasError.value = piesHasError.value ? false : true;
        pieField.value.setHasError(piesHasError.value);
      }
      if(type=='vehicle'){
        vehicleHasError.value = vehicleHasError.value ? false : true;
        vehicleField.value.setHasError(vehicleHasError.value);
      }  
    }

    return {
      nameField,
      emailField,
      pieField,
      vehicleField,
      setError,
      pieData,
      vehicleData,
    }
  }

}
</script>