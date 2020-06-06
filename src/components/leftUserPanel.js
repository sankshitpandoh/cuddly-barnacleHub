import React from 'react';
import '../stylesheets/leftUserPanel.css';

function LeftUserPanel(props){
return(
    <div className="leftUserPanel">
        <figure>
            <img src={props.data.avatar_url} alt ="display-avatar" />
        </figure>
        <h1>{props.data.name}</h1>
        <h2>{props.data.login}</h2>
        <button><a href={props.data.html_url}>View on Github</a></button>
        <div className="statusContainer">
            <p>
                {props.data.bio !== null&&
                    props.data.bio}
            </p>
        </div>
        <span className="organisation">
            {props.data.company !== null &&
                <>
                <svg className="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H4V13.25C4 12.8358 4.33579 12.5 4.75 12.5H7.25C7.66421 12.5 8 12.8358 8 13.25V14.5H10.25C10.3881 14.5 10.5 14.3881 10.5 14.25V1.75C10.5 1.61193 10.3881 1.5 10.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25ZM1.75 16C0.783502 16 0 15.2165 0 14.25V1.75C0 0.783501 0.783502 0 1.75 0H10.25C11.2165 0 12 0.783501 12 1.75V14.25C12 14.3349 11.994 14.4184 11.9823 14.5001H14.25C14.3881 14.5001 14.5 14.3882 14.5 14.2501V8.28526C14.5 8.20168 14.4582 8.12362 14.3887 8.07725L13.334 7.37412C12.9893 7.14435 12.8962 6.6787 13.126 6.33405C13.3557 5.98941 13.8214 5.89628 14.166 6.12604L15.2207 6.82918C15.7076 7.15374 16 7.70015 16 8.28526V14.2501C16 15.2166 15.2165 16.0001 14.25 16.0001H10.75C10.6818 16.0001 10.6157 15.991 10.5528 15.9739C10.4545 15.9911 10.3533 16 10.25 16H7.25C6.83579 16 6.5 15.6642 6.5 15.25V14H5.5V15.25C5.5 15.6642 5.16421 16 4.75 16H1.75ZM3 3.75C3 3.33579 3.33579 3 3.75 3H4.25C4.66421 3 5 3.33579 5 3.75C5 4.16421 4.66421 4.5 4.25 4.5H3.75C3.33579 4.5 3 4.16421 3 3.75ZM3.75 6C3.33579 6 3 6.33579 3 6.75C3 7.16421 3.33579 7.5 3.75 7.5H4.25C4.66421 7.5 5 7.16421 5 6.75C5 6.33579 4.66421 6 4.25 6H3.75ZM3 9.75C3 9.33579 3.33579 9 3.75 9H4.25C4.66421 9 5 9.33579 5 9.75C5 10.1642 4.66421 10.5 4.25 10.5H3.75C3.33579 10.5 3 10.1642 3 9.75ZM7.75 9C7.33579 9 7 9.33579 7 9.75C7 10.1642 7.33579 10.5 7.75 10.5H8.25C8.66421 10.5 9 10.1642 9 9.75C9 9.33579 8.66421 9 8.25 9H7.75ZM7 6.75C7 6.33579 7.33579 6 7.75 6H8.25C8.66421 6 9 6.33579 9 6.75C9 7.16421 8.66421 7.5 8.25 7.5H7.75C7.33579 7.5 7 7.16421 7 6.75ZM7.75 3C7.33579 3 7 3.33579 7 3.75C7 4.16421 7.33579 4.5 7.75 4.5H8.25C8.66421 4.5 9 4.16421 9 3.75C9 3.33579 8.66421 3 8.25 3H7.75Z"></path></svg>
                {props.data.company}
                </>
                }
        </span>
        <span className="location">
                {props.data.location !== null &&
                    <>
                        <svg className="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M11.536 3.46401C12.0004 3.92832 12.3689 4.47957 12.6202 5.08629C12.8716 5.693 13.0009 6.34329 13.0009 7.00001C13.0009 7.65673 12.8716 8.30701 12.6202 8.91373C12.3689 9.52044 12.0004 10.0717 11.536 10.536L8 14.07L4.464 10.535C3.99965 10.0707 3.6313 9.51938 3.38 8.91268C3.12869 8.30597 2.99934 7.6557 2.99934 6.99901C2.99934 6.34231 3.12869 5.69205 3.38 5.08534C3.6313 4.47863 3.99965 3.92736 4.464 3.46301C4.92836 2.99865 5.47963 2.63031 6.08633 2.379C6.69304 2.12769 7.34331 1.99835 8 1.99835C8.6567 1.99835 9.30696 2.12769 9.91367 2.379C10.5204 2.63031 11.0716 2.99865 11.536 3.46301V3.46401ZM12.596 11.596C13.5051 10.687 14.1242 9.5288 14.3751 8.26791C14.6259 7.00702 14.4972 5.70005 14.0053 4.5123C13.5133 3.32455 12.6802 2.30936 11.6113 1.5951C10.5423 0.880851 9.2856 0.499619 8 0.499619C6.7144 0.499619 5.45767 0.880851 4.38874 1.5951C3.31981 2.30936 2.48669 3.32455 1.99473 4.5123C1.50278 5.70005 1.37409 7.00702 1.62494 8.26791C1.87579 9.5288 2.49491 10.687 3.404 11.596L6.939 15.132C7.0783 15.2714 7.2437 15.382 7.42576 15.4574C7.60781 15.5329 7.80294 15.5717 8 15.5717C8.19707 15.5717 8.3922 15.5329 8.57425 15.4574C8.7563 15.382 8.9217 15.2714 9.061 15.132L12.596 11.596ZM8 9.00001C8.53044 9.00001 9.03914 8.78929 9.41422 8.41422C9.78929 8.03915 10 7.53044 10 7.00001C10 6.46957 9.78929 5.96087 9.41422 5.58579C9.03914 5.21072 8.53044 5.00001 8 5.00001C7.46957 5.00001 6.96086 5.21072 6.58579 5.58579C6.21072 5.96087 6 6.46957 6 7.00001C6 7.53044 6.21072 8.03915 6.58579 8.41422C6.96086 8.78929 7.46957 9.00001 8 9.00001Z"></path></svg>
                        {props.data.location}
                    </>
                }
        </span>
        <span className="blog">
                {props.data.blog !== "" &&
                    <>
                        <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M7.775 3.275C7.64252 3.41717 7.57039 3.60522 7.57382 3.79952C7.57725 3.99382 7.65596 4.1792 7.79337 4.31662C7.93079 4.45403 8.11617 4.53274 8.31047 4.53617C8.50477 4.5396 8.69282 4.46748 8.835 4.335L10.085 3.085C10.2708 2.89918 10.4914 2.75177 10.7342 2.65121C10.977 2.55064 11.2372 2.49888 11.5 2.49888C11.7628 2.49888 12.023 2.55064 12.2658 2.65121C12.5086 2.75177 12.7292 2.89918 12.915 3.085C13.1008 3.27082 13.2482 3.49142 13.3488 3.7342C13.4493 3.97699 13.5011 4.23721 13.5011 4.5C13.5011 4.76279 13.4493 5.023 13.3488 5.26579C13.2482 5.50857 13.1008 5.72917 12.915 5.915L10.415 8.415C10.2292 8.60095 10.0087 8.74847 9.76588 8.84911C9.52308 8.94976 9.26283 9.00157 9 9.00157C8.73716 9.00157 8.47691 8.94976 8.23411 8.84911C7.99132 8.74847 7.77074 8.60095 7.585 8.415C7.44282 8.28252 7.25477 8.21039 7.06047 8.21382C6.86617 8.21725 6.68079 8.29596 6.54337 8.43337C6.40596 8.57079 6.32725 8.75617 6.32382 8.95047C6.32039 9.14477 6.39252 9.33282 6.525 9.475C6.85001 9.80004 7.23586 10.0579 7.66052 10.2338C8.08518 10.4097 8.54034 10.5002 9 10.5002C9.45965 10.5002 9.91481 10.4097 10.3395 10.2338C10.7641 10.0579 11.15 9.80004 11.475 9.475L13.975 6.975C14.6314 6.31858 15.0002 5.4283 15.0002 4.5C15.0002 3.57169 14.6314 2.68141 13.975 2.025C13.3186 1.36858 12.4283 0.999817 11.5 0.999817C10.5717 0.999817 9.68141 1.36858 9.02499 2.025L7.775 3.275ZM3.085 12.915C2.89904 12.7292 2.75152 12.5087 2.65088 12.2659C2.55023 12.0231 2.49842 11.7628 2.49842 11.5C2.49842 11.2372 2.55023 10.9769 2.65088 10.7341C2.75152 10.4913 2.89904 10.2707 3.085 10.085L5.585 7.585C5.77074 7.39904 5.99132 7.25152 6.23411 7.15088C6.47691 7.05023 6.73716 6.99842 7 6.99842C7.26283 6.99842 7.52308 7.05023 7.76588 7.15088C8.00867 7.25152 8.22925 7.39904 8.415 7.585C8.55717 7.71748 8.74522 7.7896 8.93952 7.78617C9.13382 7.78274 9.3192 7.70403 9.45662 7.56662C9.59403 7.4292 9.67274 7.24382 9.67617 7.04952C9.6796 6.85522 9.60748 6.66717 9.475 6.525C9.14999 6.19995 8.76413 5.94211 8.33947 5.7662C7.91481 5.59029 7.45965 5.49974 7 5.49974C6.54034 5.49974 6.08518 5.59029 5.66052 5.7662C5.23586 5.94211 4.85001 6.19995 4.525 6.525L2.025 9.02499C1.36858 9.68141 0.999817 10.5717 0.999817 11.5C0.999817 12.4283 1.36858 13.3186 2.025 13.975C2.68141 14.6314 3.57169 15.0002 4.5 15.0002C5.4283 15.0002 6.31858 14.6314 6.975 13.975L8.225 12.725C8.35748 12.5828 8.4296 12.3948 8.42617 12.2005C8.42274 12.0062 8.34403 11.8208 8.20662 11.6834C8.0692 11.546 7.88382 11.4672 7.68952 11.4638C7.49522 11.4604 7.30717 11.5325 7.165 11.665L5.915 12.915C5.72925 13.1009 5.50867 13.2485 5.26588 13.3491C5.02308 13.4498 4.76283 13.5016 4.5 13.5016C4.23716 13.5016 3.97691 13.4498 3.73411 13.3491C3.49132 13.2485 3.27074 13.1009 3.085 12.915Z"></path></svg>
                        <a href={props.data.blog}>{props.data.blog}</a>
                    </>
                }
        </span>
   </div>
)
}

export default LeftUserPanel;
