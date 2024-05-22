import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
:root {
    /* color */
    --text-color: #fff;
    --text-color-dark: #050505;
    --border-color: #949499;
    --primary-color: #C5091F;
    --secondary-color: #870413;
    --container-color: #f0f1f1;
    --container-color-white: #fff;
    --hover-primary-color: #FF0000 ;
    --hover-secondary-color: #F89D13;
    --button-primary-color: #b71c1c;
    --button-secondary-color: #FFBC65;
    --text-color-btn: #4096ff;
  
    /* font size */
    --fs-title: 16px;
    --fs-heading: 24px;
    --fs-sub-title: 15px;
    --fs-text: 15px;
  
  }

  .ant-card-body {
    padding: 0 !important;
  }

  .YELtF :where(.css-dev-only-do-not-override-1kuana8).ant-card .ant-card-body {
    padding: 0 !important;
  }

  .ant-modal-footer button.ant-btn-primary {
    background: var(--button-primary-color);
  }

  .ant-modal-footer button.ant-btn-primary:hover {
    background: var(--hover-primary-color) !important;
  }

  .middle-container-row {
    width: 70%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-right: 20px; 
    .icon-layout {
      padding-left: 3px
    }
  }

  .btn-reset {
      margin-top: 10px;
    }

  .btn-search {
    display: none;
  }

  .btn-find {
      margin-bottom: 14px;
    }

  .pagination {
    display: flex;
    margin-bottom: 24px
  }

  .middle-container-row {
    .frame-section {
    padding: 10px !important;
  }

  }

  .input-section {
      height: 40px;
    margin-bottom: 0px !important;
  }
  .search-value {
    height: 40px !important;
    margin-bottom: 0px !important;
  }
  .input-search > div, .search-wrapper > div{
    margin-bottom: 0px !important;

  }

  .author-name {
    margin-top: 12px;
}

  .avatar {
    margin-top: 24px;
    margin-right: 7px;
  }

  .btn-action {
          display: flex;
          flex-direction: row;
        } 

        .icon-layout {
          width: 24px !important;
          height: 24px !important;
        }
        

  @media (max-width: 370px) {
    .bulk-actions {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
        .btn-action {
          display: flex;
          flex-direction: row;
          margin-bottom: 12px;
        } 
      }
  }

// Màn hình Extra Small
@media (max-width: 575px) {
    .frame-section {
      display: none !important;
    }
  
    .filter-section {   
      .filter-field {
        flex-direction: column;
        gap: 12px;
      }
    .input-search {
     margin: 0 12px;
    }
    .search-wrapper {
      width: 100%;
  .search-date {
    padding: 8px 10px;
    margin: 0 12px;
  } 
}
  }   
  
  .container-row {
    display: flex;
    flex-wrap: wrap;

    .md-card-item {
    min-height: 500px;
  }
    
  }
  .card-title{
     margin-top: 24px !important;
     margin-left: 26px;
    }

  .xs-des, .md-des {
   margin-top: 24px !important;
   padding: 0 26px !important;
   margin-bottom: 12px;
  }

  .btn-find {
    margin-left: 12px;
        width: 92% !important;
        height: 10% !important;
        }

        .btn-reset {
      margin-left: 12px;
      }
      .bulk-actions {
        .btn-action {
          display: flex;
          flex-direction: row;
          margin-bottom: 12px;
        } 
      }
      .date-time-picker {
    margin: 0 12px !important;
  }
  }

  // Màn hình Small
  @media (min-width: 576px) and (max-width: 767px) {
    .middle-container-row, .container-row {
      .card-title {
        margin-top: 24px !important;
        margin-left: 26px;
      }
      .md-des, .xs-des {
        margin-top: 24px;
        padding: 0 26px;
        margin-bottom: 12px;
      }
      .filter-section {

        .input-search {
          margin: 0 24px;
        }
        .filter-field {
        flex-direction: column;
        gap: 12px;
      }
        .search-wrapper {
          width: 100%;
          .search-date {
            margin: 0 24px;
        }
        }         
         
        .btn-find {
          margin-left: 24px;
          display: block;
          width: 92% !important;
        height: 10% !important;
        }

        .btn-reset {
      margin-left: 24px;
      }
    
        .btn-search {
          display: none;
        }
      }
    }
    .container-row {
      .search-wrapper {
        .search-date {
            width: 91%;
        }
        }
        .md-card-item {
    min-height: 500px;
  }
    
    }
    .middle-container-row {
      .filter-section, .frame-section {
        margin-right: 15px;
      }
    }

  }

  // Màn hình Medium 
  @media (min-width: 768px) and (max-width: 991px) {
    .container-row, .middle-container-row {
      .filter-section {

        .input-search {
          margin: 0 24px;
        }
        .filter-field {
        flex-direction: column;
        gap: 12px;
      }
        .search-wrapper {
          width: 100%;
          .search-date {
            width: 90%;
            margin: 0 24px;
        }
        }

        .btn-find {
          margin-left: 24px;
          width: 93% !important;
        height: 10% !important;
        }
        .btn-reset {
      margin-left: 24px;
      }
      }

      .card-title {
        margin-top: 24px !important;
        margin-left: 26px;
      }
      .md-des, .xs-des {
        margin-top: 24px;
        padding: 0 26px;
        margin-bottom: 12px;
      }
    }
    .card-title{
     margin-top: 24px !important;
    }
      .container-row {        
          .search-date {
          width: 93% !important;
        }        
    }
    .md-card-item {
      min-height: 500px !important;
    }
    .date-time-picker {
      width: 92% !important;
    margin: 0 24px !important;
  }
  }
  /* Màn hình Large */
@media (min-width: 992px) and (max-width: 1199px) {
  .container-row {
    display: flex;
    flex-direction: row;
    .frame-section {
      margin-right: 0;
    }
    .search-section {
      width: 100%;
    }
      .filter-section {  
        height: 50px !important;      
        .filter-field {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 12px;
      }
      .input-search { 
        width: 95%;
      }
        .search-wrapper {
          width: 100%;
      margin-bottom: 1px;
      margin-left: -15px;

          .search-date {
          width: 90%;
        }
        }

        .btn-find {
          margin: -21px 0 0 -45px;
        position: absolute;
        width: 100px !important;
        height: 40px !important;
        }
        .btn-reset {
          margin-bottom: -20px;
      margin-top: -20px;
      }
      }
        .card-title {
        margin-top: 24px !important;
        margin-left: 26px;
        margin-right: 10px;
      }
      
      .md-des, .xs-des {
        margin-top: 24px;
        padding: 0 26px;
        margin-bottom: 12px;
      }
      .author-name {
        width: 40px;
        margin-top: 30px;
      }
      .section-time {
        width: 180px;
        .date-time {
          width: 200px;
          font-size: 12px;
          margin-right: 40px;
        }
      }
      .md-card-item {
    min-height: 600px;
  }
      .card__action-top {
        flex-direction: column;
        .btn-delete, .btn-accept {
          width: 250% !important;
        }
      }
    }
    .middle-container-row {
      .filter-section {
        .input-search {
          margin: 0 24px;   
          width: 220%;
        }
        .filter-field {
        flex-direction: column;
        gap: 12px;
      }
        .search-wrapper {
          width: 100%;
          .search-date {
            margin: 0 24px;
          width: 244%;

        }
        }  
        .btn-find {
          margin-left: 24px;
        }

        .btn-reset {
      margin-left: 24px;
      }
      }
      .card-title {
        margin-top: 24px !important;
        margin-left: 26px;
      }
      .md-des, .xs-des {
        margin-top: 24px;
        padding: 0 26px;
        margin-bottom: 12px;
      }
    }
}
  /* Màn hình Extra Large */
@media (min-width: 1200px) and (max-width: 1399px), (min-width: 1400px){
  .container-row {
    display: flex;
    flex-direction: row;
    .frame-section {
      margin-right: 0;
    }
    .search-section {
      width: 100%;
    }
      .filter-section {     
        height: 50px !important;   
        .filter-field {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 12px;
        .input-search {
          margin-left: -25px;
        }
      }
        .search-wrapper {
          width: 100%;
      margin-bottom: 1px;

          .search-date {
          width: 90%;
        }
        }

        .btn-find {
          margin: -21px 0 0 -45px;
        position: absolute;
        width: 134px !important;
        height: 40px !important;
        }
        .btn-reset {
          margin-bottom: -20px;
      margin-top: -20px;
      }
      }
      .card-title {
        margin-top: 10px !important ;
      }      
      .md-card-item {
    min-height: 500px;
  }
    }
    .middle-container-row {
      .filter-section {
        .input-search {
          margin: 0 24px;   
          width: 220%;
        }
        .filter-field {
        flex-direction: column;
        gap: 12px;
      }
        .search-wrapper {
          width: 100%;
          .search-date {
            margin: 0 24px;
          width: 244%;

        }
        }  
        .btn-find {
          margin-left: 24px;
        }

        .btn-reset {
      margin-left: 24px;
      }
      }
    }
    .date-time-picker {
    width: 90%;
    height: 40px;
    margin: 0 ;
  }
}

@media (min-width: 1280px) and (max-width: 1400px) {
  .card-title, .md-des, .xs-des {
        margin-left: 14px !important;
      }
}
  // Màn hình Extra Extra Large
  @media (min-width: 1400px)  {
    .container-row {
      margin-right: 20px;       
    .search-section {
      width: 100%;
      margin-right: 40px;
    }
      .filter-section {        
        margin-right: 20px;
        height: 50px !important;
        .filter-field {

        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 12px;

        .input-search {
          margin-left: -43px;
        }
      }
        .search-wrapper {
          width: 100%;
      margin-bottom: 1px;

          .search-date {
          width: 90%;
        }
        }    

        .btn-find {
          margin: -20px 0 0 -45px;
        position: absolute;
        width: 160px !important;
        height: 40px !important;
        }
        .btn-reset {
      margin-bottom: -20px;
      margin-top: -20px;
      }
      }
    }
    .middle-container-row {
    margin-right: 20px; 

    .input-section {
      width: 100%;
    }
    .search-wrapper {
      width: 272% !important;
        margin-left: 24px;
    }
    
  }
  }

  .date-time-picker {
    width: 90%;
    height: 40px;
    margin: 0;
  }

  .modal-container {
    z-index: 99999;
  }
`;
