export type User = {
    address: string;
    ens :string;
    avatar :string;
    about :"";
    accounts :{
        discord?: string;
        twitter?: string;
        github?: string; 
        forum?: string;
    }
    daos : Dao[];
    messages : Message[];
    connections : Connection[];
    contributions : Contribution[];
    spark_count :number;
};

export type Dao = {
    name :string;
    about :string;
    discord_link :string;
    twitter :string;
    site :string;
    members : User[];
};

export type ConnectionType = "dicord_voice" | "forum_topic" | "IRL" | "github_repo" ;

export type Connection = {
    link: string;
    type: ConnectionType;
    dao: Dao;
};

export type MessageType = "discord" | "twit" | "forum" | "github" | "telegram";

export type Message = {
    content:string;
    type: MessageType;
    dao: Dao;
};

export type ContributionType = "github_code" | "github_review" | "design" | "doc" | "coordination";

export type Contribution = {
    link: string;
    type: ContributionType;
    dao: Dao;
}