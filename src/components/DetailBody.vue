<template>
<div class="pa-12">
    <v-list dense>
        <h2>What you will get with this tool</h2>
      <v-list-item-group
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon  color="green">mdi-check-bold</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list dense>
        <h2>What you won't get</h2>
      <v-list-item-group
      >
        <v-list-item
          v-for="(item, i) in itemsNone"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon  color="red">mdi-close-thick</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</div>
</template>

<script>
export default {
    name: 'DetailBody',
    data: () => ({
    //   selectedItem: 1,
      items: [
        { text: 'The ISP and organizations name'},
        { text: 'The IPs host name' },
        { text: 'The country its in' },
        { text: 'The region/state' },
        { text: 'The city' },
        { text: 'The latitude and longitude of the location (a best guess)' },
        { text: 'The area code for that region' },
        { text: 'Any known services running on that IP' },
      ],
      itemsNone: [
        { text: 'A persons name'},
        { text: 'The exact location or street address' },
        { text: 'A phone number' },
        { text: 'Their email address' },
      ],
    }),
}
</script>
