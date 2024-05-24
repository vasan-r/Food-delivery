import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
        />
      </div>
      <div className="nav">
        <ul>
          <li>home</li>
          <li>About</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

// api key from swiggy
const resList = [
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        collectionId: "83649",
        title: "Biryani",
        description:
          "Taste these delectable classics, delectable biryanis to make your day.",
        imageId:
          "v1674029961/PC_Creative%20refresh/3D_bau/collections_new/Biriyani.png",
        aspectRatio: "3.44",
        cta: {
          link: "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani,layout_cuisine_biryani,ads_pc_biryani,biryani",
          type: "collectionv2",
        },
        type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        count: "124 restaurants",
      },
    },
  },
  {
    card: {
      card: {
        "@type":
          "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        sortConfigs: [
          {
            key: "relevance",
            title: "Relevance(Default)",
            selected: true,
            defaultSelection: true,
          },
          {
            key: "deliveryTimeAsc",
            title: "DeliveryTime",
          },
          {
            key: "modelBasedRatingDesc",
            title: "Rating",
          },
          {
            key: "costForTwoAsc",
            title: "Cost:LowtoHigh",
          },
          {
            key: "costForTwoDesc",
            title: "Cost:HightoLow",
          },
        ],
        restaurantCount: 124,
        facetList: [
          {
            label: "Veg/Non-veg",
            id: "isVeg",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "Pure veg",
                id: "isVegfacetquery2",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Non Veg",
                id: "isVegfacetquery3",
                analytics: {},
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Filter by",
          },
          {
            label: "Delivery Time",
            id: "deliveryTime",
            selection: "SELECT_TYPE_SINGLESELECT",
            facetInfo: [
              {
                label: "Less than 30 mins",
                id: "deliveryTimefacetquery2",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Less than 45 mins",
                id: "deliveryTimefacetquery3",
                analytics: {},
              },
            ],
            viewType: "VIEW_TYPE_FLATTENED",
            subLabel: "Filter by",
          },
          {
            label: "Cost for two",
            id: "costForTwo",
            selection: "SELECT_TYPE_MULTISELECT",
            facetInfo: [
              {
                label: "Rs. 300-Rs. 600",
                id: "costForTwofacetquery3",
                analytics: {},
                openFilter: true,
              },
              {
                label: "Greater than Rs. 600",
                id: "costForTwofacetquery4",
                analytics: {},
              },
              {
                label: "Less than Rs. 300",
                id: "costForTwofacetquery5",
                analytics: {},
                openFilter: true,
              },
            ],
            viewType: "VIEW_TYPE_HALF_CARD",
            subLabel: "Filter by",
          },
        ],
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        layout: {
          rows: 1,
          widgetPadding: {
            left: 16,
            top: 20,
            right: 16,
            bottom: 16,
          },
          scrollBar: {},
          widgetTheme: {
            defaultMode: {
              backgroundColour: "#FFFFFF",
              theme: "THEME_TYPE_LIGHT",
            },
            darkMode: {
              backgroundColour: "#1B3028",
              theme: "THEME_TYPE_DARK",
            },
          },
        },
        id: "restaurantCountWidget",
        gridElements: {
          infoWithStyle: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "124 restaurants to explore",
            headerStyling: {
              textSize: 15,
              textColor: "text_color_highest_emphasis",
              textFontName: "FONT_NAME_HEADER_H5",
              maxLines: 1,
            },
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "121242",
          name: "Exxpress Chicken",
          cloudinaryImageId: "tn93mc489echmvwyindq",
          locality: "Periyanaickenpalayam",
          areaName: "Periyanaikanpalayam",
          costForTwo: "₹200 for two",
          cuisines: ["South Indian", "Chinese"],
          avgRating: 4.3,
          parentId: "18206",
          avgRatingString: "4.3",
          totalRatingsString: "5K+",
          promoted: true,
          adTrackingId:
            "cid=13749220~p=1~adgrpid=13749220#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=121242~eid=764533a2-ce8d-42c6-8d6c-7964d3124c65~srvts=1716559322489~collid=83649",
          sla: {
            deliveryTime: 42,
            lastMileTravel: 9.5,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "9.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-05-24 22:30:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                    },
                  },
                ],
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=121242&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "243140",
          name: "The Biryani Life",
          cloudinaryImageId: "p69deqgobhejxnjfzm9g",
          locality: "Poombugar Nagar Rd",
          areaName: "Saravanamapatti Village",
          costForTwo: "₹250 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.1,
          parentId: "8496",
          avgRatingString: "4.1",
          totalRatingsString: "1K+",
          promoted: true,
          adTrackingId:
            "cid=13744148~p=2~adgrpid=13744148#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=243140~eid=fa378ee7-dac5-4089-ae34-4605855a9896~srvts=1716559322489~collid=83649",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 1,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-05-24 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=243140&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "809733",
          name: "Vinci",
          cloudinaryImageId: "5f3089816806aeb586175327dd5f2bfc",
          locality: "Bharathi Colony",
          areaName: "Peelamedu",
          costForTwo: "₹300 for two",
          cuisines: ["South Indian", "Chinese", "Biryani", "Desserts"],
          avgRating: 4.4,
          parentId: "482941",
          avgRatingString: "4.4",
          totalRatingsString: "100+",
          promoted: true,
          adTrackingId:
            "cid=13751434~p=4~adgrpid=13751434#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=809733~eid=24e7c7a4-c7ae-418b-ac91-35e1fb6700f0~srvts=1716559322489~collid=83649",
          sla: {
            deliveryTime: 55,
            lastMileTravel: 7.6,
            serviceability: "SERVICEABLE",
            slaString: "55-60 mins",
            lastMileTravelString: "7.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-05-24 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹349",
            discountTag: "FLAT DEAL",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=809733&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "113855",
          name: "Beef Point",
          cloudinaryImageId: "rzlbspen1boptz2rfyq2",
          locality: "Thudiyalur",
          areaName: "Saravanampatty",
          costForTwo: "₹200 for two",
          cuisines: ["Kerala", "Indian"],
          avgRating: 4.3,
          parentId: "42967",
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          promoted: true,
          adTrackingId:
            "cid=13750733~p=5~adgrpid=13750733#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=113855~eid=bbf710b3-ee0f-4ce5-b198-c2ed2a73c950~srvts=1716559322489~collid=83649",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-05-24 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=113855&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "65609",
          name: "Ravuthar Biriyani Hotel",
          cloudinaryImageId: "aodw9x9bynvx8jvmbzhk",
          locality: "Thudiyalur",
          areaName: "Thudiyalur",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani", "Chinese", "Grill"],
          avgRating: 4.3,
          parentId: "18400",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          promoted: true,
          adTrackingId:
            "cid=13045262~p=6~adgrpid=13045262#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=65609~eid=11b44ed9-af3e-42d2-a9a1-07e0357defbf~srvts=1716559322489~collid=83649",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 7.6,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "7.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-05-24 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=65609&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "446918",
          name: "Hotel sathar Rowther",
          cloudinaryImageId: "khulxf9bpwn05pr9i0qs",
          locality: "Devangapet Steet No 3",
          areaName: "Saravanampatti",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese"],
          avgRating: 4.3,
          parentId: "12037",
          avgRatingString: "4.3",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 16,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-05-24 23:00:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "Ratnesh_Badges/test2.png",
                shortDescription: "Perfect ice cream delivery",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      shortDescription: "Perfect ice cream delivery",
                      fontColor: "#7E808C",
                      iconId: "Ratnesh_Badges/test2.png",
                    },
                  },
                ],
              },
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            discountTag: "POCKET HERO",
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=446918&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "121243",
          name: "Green Leaf Restaurant",
          cloudinaryImageId: "70d1a45a19672a08c8735bf57aa3dfae",
          locality: "Kalapatti",
          areaName: "Kalapatti",
          costForTwo: "₹200 for two",
          cuisines: ["Biryani", "Kerala", "Indian", "Beverages"],
          avgRating: 4.5,
          parentId: "18207",
          avgRatingString: "4.5",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 17,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-05-24 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "1K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=121243&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const Cart = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, deliveryTime } =
    resData.card.card?.info;
  return (
    <div className="cart">
      <img
        className="food-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h4>{avgRatingString} ratings</h4>
      <p>{deliveryTime} minutes</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">search</div>
      <div className="cart-container">
        {resList.slice(3).map((restaruant) => (
          <Cart key={restaruant.card.card.info.id} resData={restaruant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
