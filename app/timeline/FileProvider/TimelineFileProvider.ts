import * as fs from "tns-core-modules/file-system";
export class TimeLineFileProvider {
    /**
     *
     */
    constructor() {
        this.documents = fs.knownFolders.documents();
    }
    private documents: fs.Folder
    public GetProfileImagePath(petId: string): string {

        var resPath = "";
        var a = this.documents.getFolder(petId).getFolder("ProfileImages").eachEntity((e) => {
            if (e.name.indexOf("profile") > -1) {
                resPath += e.path
                return false;
            }
            return true;
        })
        return resPath;
    }
    public SaveProfileImage(petId: string, uri: string): string {

        var documents = fs.knownFolders.documents();
        var sourceFile = fs.File.fromPath(uri);
        var separator = fs.path.separator;
        documents.getFolder(petId).getFolder("ProfileImages").clear();
        var path = fs.path.normalize(petId + separator + "ProfileImages" + separator + this.guid() + sourceFile.extension);

        var destinationFile = fs.knownFolders.documents().getFile(path);
        var source = sourceFile.readSync(e => { console.log(e) });
        destinationFile.writeSync(source, e => { console.log(e) });
        return destinationFile.path;
    }
    guid() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }


}